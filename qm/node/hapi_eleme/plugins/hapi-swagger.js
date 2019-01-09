const inert = require('inert'); //hapi 静态文件或者目录
const vision = require('vision'); //hapi专用模板显示 npm
const packageModule = require('package'); // 拿到package.json里的一些数据项
const hapiSwagger = require('hapi-swagger')


module.exports = [
  inert,
  vision,
  {
    register:hapiSwagger,
    options:{
      info:{
        title:'接口文档',
        version:packageModule.version
      },
      grouping:'tags',
      tags:[
        { name:'tests',description:'测试相关'}
      ]
    }
  }
]