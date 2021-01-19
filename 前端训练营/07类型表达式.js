new Promise(resolve => resolve()).then(() => {
  console.log('2')
})

setTimeout(function () {
  console.log('3')
  new Promise(resolve => resolve()).then(() => {
    console.log('4')
  })
}, 0)

console.log('1')

let arr = [0, 1, 2, undefined];
console.log('arr.indexOf(undefined)', arr.indexOf(undefined))
arr.forEach(item => {
  console.log(item);
})
arr.length = 2;
console.log(arr); // [0, 1]
arr.length = 5;
console.log(arr); // [0, 1, empty × 3]


let str = "";
str.constructor = Array;
console.log('str.constructor === Array;', str.constructor === Array)
console.log('str.constructor === String;', str.constructor === String)

 // false
