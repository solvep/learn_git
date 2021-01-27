const net = require('net');

// const client = net.createConnection({
//   host: "127.0.0.1",
//   port: 8088
// }, () => {
//   // 'connect' listener.
//   console.log('connected to server!');

//   let request = new Request({
//     method: "POST",
//     host: '127.0.0.1',
//     port: '8088',
//     path: '/',
//     headers: {
//       ["x-Foo"]: 'customed'
//     },
//     body: {
//       name: 'llj'
//     }
//   })

//   // console.log('=')
//   client.write(request.toString())
// });
// client.on('data', (data) => {
//   console.log(data.toString());
//   client.end();
// });
// client.on('end', () => {
//   console.log('disconnected from server');
// });

class TrunkedParser {
  constructor() {
    this.WAITING_LENGTH = 0
    this.WAITING_LENGTH_LINE_END = 1
    this.READING_TRUNK = 2
    this.WAITING_NEW_LINE = 3
    this.WAITING_NEW_LINE_END = 4
    this.length = 0
    this.isFinished = false
    this.content = []

    this.current = this.WAITING_LENGTH
  }
  receiveChar(char) {
    // console.log(JSON.stringify(string))
    if (this.current === this.WAITING_LENGTH) {
      console.log('char', char)
      if (char === '\r') {
        if (this.length == 0) {
          console.log(this.content)
          console.log('///////////////')
          this.isFinished = true
        }
        this.current = this.WAITING_STATUS_LINE_END
      } else {
        this.length *= 10
        this.length += char.charCodeAt(0) - '0'.charCodeAt(0)
      }
    } else if (this.current === this.WAITING_LENGTH_LINE_END) {
      if (char === '\n') {
        this.current = this.READING_TRUNK
      }
    } else if (this.current === this.READING_TRUNK) {
      this.content.push(char)
      this.length--;
      if (this.length === 0) {
        this.current = this.WAITING_NEW_LINE
      }
    } else if (this.current === this.WAITING_NEW_LINE) {
      if (char === '\r') {
        this.current = this.WAITING_NEW_LINE_END
      }
    } else if (this.current === this.WAITING_NEW_LINE_END) {
      if (char === '\n') {
        this.current = this.WAITING_LENGTH
      }
    }
  }
}

class ResponseParser {
  constructor() {
    this.WAITING_STATUS_LINE = 0;
    this.WAITING_STATUS_LINE_END = 1;
    this.WAITING_HEADER_NAME = 2;
    this.WAITING_HEADER_SPACE = 4
    this.WAITING_HEADER_VALUE = 5;
    this.WAITING_HEADER_LINE_END = 6;

    this.WAITING_HEADER_BLOCK_END = 7;
    this.WAITING_BODY = 8;
    this.current = this.WAITING_STATUS_LINE
    this.statusLine = ""
    this.headers = {}
    this.headerName = ""
    this.headerValue = ""
  }
  receive(string) {
    for (let i = 0; i < string.length; i++) {
      this.receiveChar(string.charAt(i))
    }
  }
  receiveChar(char) {
    if (this.current === this.WAITING_STATUS_LINE) {
      if (char === '\r') {
        this.current = this.WAITING_STATUS_LINE_END
      } if (char === '\n') {
        this.current = this.WAITING_HEADER_NAME
      } else {
        this.statusLine += char
      }
    } else if (this.current === this.WAITING_STATUS_LINE_END) {
      if (char === '\n') {
        this.current = this.WAITING_HEADER_NAME
      }
    } else if (this.current === this.WAITING_HEADER_NAME) {
      if (char === ':') {
        this.current = this.AITING_HEADER_SPACE;
      } else if (char === '\r') {
        this.current = this.WAITING_HEADER_BLOCK_END;
        if (this.headers['Transfer-Encoding'] === 'chunked') {

          this.bodyParser = new TrunkedParser();
        }
      } else {
        this.headerName += char
      }
    } else if (this.current === this.WAITING_HEADER_VALUE) {
      if (char === '\r') {
        this.current = this.WAITING_HEADER_LINE_END;
        this.headers[this.headerName] = this.headerValue;
        this.headerName = ''
        this.headerValue = ''
      } else {
        this.headerValue += char
      }
    } else if (this.current === this.AITING_HEADER_SPACE) {
      if (char === " ") {
        this.current = this.WAITING_HEADER_VALUE;
      }
    } else if (this.current === this.WAITING_HEADER_LINE_END) {
      if (char === '\n') {
        this.current = this.WAITING_HEADER_NAME
      }
    } else if (this.current === this.WAITING_HEADER_BLOCK_END) {
      if (char === '\n') {
        this.current = this.WAITING_BODY
      }
    } else if (this.current === this.WAITING_BODY) {
      this.bodyParser.receiveChar(char)
    }
  }
}

class Request {
  // method, url = host + port + path
  // body: k/v
  // headers
  constructor(options) {
    this.method = options.method || "GET"
    this.host = options.host;
    this.port = options.port || 80;
    this.path = options.path || '/'
    this.body = options.body || {};
    this.headers = options.headers || {};
    if (!this.headers["Content-Type"]) {
      this.headers["Content-Type"] = "application/x-www-form-urlencoded"
    }
    if (this.headers["Content-Type"] === "application/json") {
      this.bodyText = JSON.stringify(this.body)
    } else if (this.headers["Content-Type"] === "application/x-www-form-urlencoded") {
      this.bodyText = Object.keys(this.body).map(key => `${key} = ${encodeURIComponent(this.body[key])}`)
    }
    this.headers["Content-Length"] = this.bodyText.length
  }
  toString() {
    return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r
\r
${this.bodyText}`
  }
  open(method, url) {

  }
  send(connection) {
    return new Promise((resolve, reject) => {
      const parser = new ResponseParser()
      if (connection)
        connection.write(this.toString())
      else
        connection = net.createConnection({
          host: this.host,
          port: this.port
        }, () => {
          connection.write(this.toString())
        })
      connection.on('data', (data) => {
        //  这个地方的data 可能有多个具体出发多少次是不固定的，所以用监听比较合适。
        // new Response(data)
        parser.receive(data.toString())
        // resolve(data.toString())
        console.log(parser.statusLine)
        console.log(parser.headers)
        connection.end()
      });
      connection.on('error', (err) => {
        reject(err)
        connection.end()
      });
    })

  }
}
class Response {
  receive(string) {

  }
}

void async function () {

  let request = new Request({
    method: "POST",
    host: '127.0.0.1',
    port: '8088',
    path: '/',
    headers: {
      ["x-Foo"]: 'customed'
    },
    body: {
      name: 'llj'
    }
  })
  let res = await request.send()
  console.log('res', res)
}()

