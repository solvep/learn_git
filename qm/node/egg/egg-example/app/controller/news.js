'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const dataList = {
      list:[
        {id:1,title:"this is news 1",url:'/news/1'},
        {id:2,title:"this is news 2",url:'/news/2'},
        {id:3,title:"this is news 3",url:'/news/3'},
      ]
    }
    // this.ctx.body = dataList;
    // compile过程将数据渲染到模板上的过程
    await this.ctx.render('news/list.tpl',dataList);

  }
  async item(){
    const id = this.ctx.params.id || 1;
    await this.ctx.render('./news/item.tpl')
  }
}

module.exports = NewsController;
