// art-template 不仅可以在浏览器中使用，也可以在node中使用
var fs = require('fs')

fs.readdir('D:/Movie/www',function(err,files){
  if(err){
    return console.log('目录不存在')
  }
  console.log('')
})