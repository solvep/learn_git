const bar = require('./bar')

console.log('bar', bar.module)

setTimeout(() =>{
  console.log('bar.name', bar.name)
  bar.name = 'llj'
}, 2000 )
