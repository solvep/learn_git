// 使用 node 构建一个服务器
// 1.在node中专门提供了一个核心模块：http
const  http = require('http');

const server = http.createServer() // 创建一个web服务器 返回一个server实例
// 当客服端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数
const server1 = http.createServer()
server.on('request',function(request,response){
    // requests是请求的信息
    console.log('收到客服端的请求了，请求路径' + request.url)
    // write 可以使用多次，但是一定要使用end来结束响应，否则客户端会一直等待
    // response.write('hello world!!')
    
    // 获取请求路径
    let url = request.url;
    // 响应内容只能是字符串或者Buffer二进制
    if(url === '/123'){
     const str = {
         af:'adf',
         as:'123'
     }
     response.end(JSON.stringify(str))
    }
    response.end('hello world')
    // 判断路径处理响应
})
// 绑定端口号，启动服务器
server.listen(4000,function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000 来访问')
})
server1.listen(3000,function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000 来访问')
})
// request:请求对象可以用来处理和护短的一些请求信息