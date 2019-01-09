const Koa = require('koa');
const app = new Koa();
const staticSever = require('koa-static');
const path = require('path');

app.use(staticSever(path.join(__dirname)));
app.listen(3000)