const http = require('http')
const fs = require('fs')

http.createServer(function(request,response){
  console.log("request come---",request.url)
 
  if(request.url === '/'){
    const html = fs.readFileSync('./text.html','utf8')
    response.writeHead(200,{
      'Content-Type':'text/html'
    })
    response.end(html)
  }
  if(request.url === '/script.js'){
  response.writeHead(200,{
    'Content-Type':'text/javascript',
    'Cache-Control':'max-age=20'
  })
  response.end('console.log("script loaded")')
}

}).listen(8887)

console.log('server')