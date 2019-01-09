const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const fs = require('fs');

var router = new Router();
const about = ctx =>{
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page </a> '
}
const main = ctx =>{
  ctx.response.body = 'Hello'
}



// template.html V main C
router.get('/', (ctx) => {
  ctx.response.body = 'Hello'
}).get('/about',(ctx) =>{
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page </a> '
})

app.use(router.routes())
.use(router.allowedMethods());
app.listen(3000);