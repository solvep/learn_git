const Koa = require('koa');
const app = new Koa();


app.use(async (ctx,next)=>{
 console.log(ctx.response);
 if(ctx.url === '/'){
   ctx.response.redirect('/login')
 }else{
   ctx.body = '我是登陆界面'
 }
}) 

app.listen(3000)