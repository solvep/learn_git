const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const infos = {
    "123":{
        username:"tangtangddd",
        sex:"男"
    },
    "456":{
        username:"tangtang",
        sex:"man"
    }
}
//web server 
// node 是如何提供http服务
const server = http.createServer((req,res) =>{
    // 提供访问的，每次有http请求的时候这个方法都会被执行。伺服状态 
    // req对象 请求对象request   url 统一资源定位 querystring query body 
    // res 服务结果对象 response.
    if(req.url === '/rhino.png'){
        const png = fs.readFileSync('./rhino.png');
        res.statusCode = 200;
        res.setHeader('Content-Type','imag/png')
        res.end(png)
        return;
    }
    if(req.url.indexOf('/getInfo')>=0){
        const qs = req.url.split('?')[1]
        console.log(qs);
        const params = querystring.parse(qs);
        console.log(params);
        const id = params.id;

        const info = infos[id] || {};

        res.statusCode = 200;
        // res.setHeader('Content-Type','text/plain')
        res.end(JSON.stringify(info));
        return;
        
    }
    const index = fs.readFileSync('./index.html','utf8')  //读取index.html
    res.statusCode = 200;   //200成功
    res.setHeader('Content-Type','text/html');
    res.end(index);
});
// addEventListener和listen   3000端口 服务器端跑起来了 
server.listen(3000,'127.0.0.1',()=>{
    console.log('服务器跑起来了');
})