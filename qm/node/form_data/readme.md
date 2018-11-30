走进后端 
动态的查询数据处理
1. Backend 
 web Server 硬件服务器 | php java 等语言 后端服务器应用程序
 提供http访问 协议加上IP地址或ip地址对应的域名 端口号 8000/3000 
    http://127.0.0.1:3000/index?a=1&b=2
    protocol http://
    127.0.0.1 IP地址 => domain baidu.com 
    3000 端口号 在这个端口进入伺服状态
    /path 路径 
    ？ querystring 
2. web server用了类事件的概念
http.createServer((req,res)=>{
    
})
server.listen(port,ip,()=>{})
