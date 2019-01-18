const Router = require('koa-router');

const home = new Router();
home.get('/',async(ctx) =>{
  const title = '首页';
  ctx.cookies.set('username','lisa',{
    domain:'localhost',
    path:'/',
    httpOnly:false,
    maxAge:6000
  });
  ctx.cookies.set('uid','1000',{
    domain:'localhost',
    path:'/',
    httpOnly:false
  });
  ctx.body = title;
})


const router = new Router();
router.use('/',home.routes(),home.allowedMethods())

module.exports= router;