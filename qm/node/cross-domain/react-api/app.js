const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');

const apiRouter = new Router();
apiRouter.get('/api',async(ctx)=>{
  ctx.body = {'msg':'hello world'}
});

app.use(apiRouter.routes()).use(apiRouter.allowedMethods());

app.listen (8080,() =>{
  console.log('server app is runing');
})