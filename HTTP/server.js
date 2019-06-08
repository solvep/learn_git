const http = require('http')

http.createServer(function(request,response){
  console.log("request come",request.url)
  // response.writeHead(200,{
  //   'Access-Control-Allow-Origin':'*'
  // })
  response.end('123')
}).listen(8888)

console.log('server')