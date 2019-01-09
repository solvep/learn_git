- 启动web server
  HTTP Server 3000 伺服

用户request(n)  中间件(函数)  右边的response(访问结束)
图片，不可能都给他们构建url so静态资源服务

中间件是有顺序的，next 将它向后交
response.body 