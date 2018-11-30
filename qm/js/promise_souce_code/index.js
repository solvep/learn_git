const Promise = require('./promise.js');
const p = new Promise((resolve, reject) => {
    console.log('kaishi');
  setTimeout(() => {
    console.log('wangbi');
    resolve('啊啊啊啊');
  }, 1000)
  
})
p
  .then(data => {
    console.log(data);
  }, err => {
    console.error(err);
  })