Array.prototype.forEach2 = function(fn) {
    if (typeof fn !== 'function') {
      throw new Error('参数必需为函数');
    }
    if(!Array.isArray(this)){
        throw new Error('只能');
    }
  }
  const arr = new Array(1,2,3);
  arr.forEach2('abc');
// Array.prototype.forEach2 = function(fn) {
//     if (typeof fn !== 'function') {
//       throw new Error('参数必需为函数');
//     }
//   }
//   const arr = new Array(1,2,3);
//   arr.forEach2('abc');
// [1,2,3].forEach(function(i,index){
//     console.log(arguments[0]==i);

// console.log(`第${index}遍历值为${i}`);
// })