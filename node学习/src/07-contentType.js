const  http = require('http');
const  fs = require('fs')
const server = http.createServer()

server.on('request',function(request,response){
    let url = request.url;
    if(url === '/'){
        fs.readFile('./index.html',function(err,data){
            if(err){
                response.end("文件读取失败")
            } else{
                response.setHeader('Content-Type','text/html; charset=utf-8')
                response.end(data)
            }
        })
    }
})

server.listen(4000,function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:4000 来访问')
})

// const server = http.createServer()
// server.on('request',function(request,response){
//     console.log('收到客服端的请求了，请求路径' + request.url)
//     response.end('hello world')
// })

// server.listen(4000,function(){
//     console.log('服务器启动成功了，可以通过http://127.0.0.1:3000 来访问')
// })