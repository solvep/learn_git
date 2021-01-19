let path = require('path')
module.exports ={
  mode:'development',
  entry : './src/index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  }
}

['john-reese', 'harold-finch', 'sameen-shaw'] 
// 转换成 
[{name: 'John Reese'}, {name: 'Harold Finch'}, {name: 'Sameen Shaw'}]
let arr = ['john-reese', 'harold-finch', 'sameen-shaw']
let newArr = []
for(let i = 0, len = arr.length; i < len; i++){
  let name = arr[i]
  let names = name.split('-')
  let newName = [];
  for(let j = 0, nameLens = names.length; j < nameLens; j++){
   let nameItem = names[j][0].toUpperCase() + names[j].slice(1)
   newName.push(nameItem)
  }
  newArr.push({name: newName.join(' ')})
}
console.log('newArr', newArr)