const Koa = require('koa');
const fs = require('fs.promised');
const app = new Koa();


const main = async (ctx,next) =>{
  ctx.response.type = 'html';
  // 去查数据库，文件处理，IO操作等后端异步任务
  ctx.response.body = await fs.readFile('./teamplate.html','utf8')
}
app.use(main);


app.listen(8080);