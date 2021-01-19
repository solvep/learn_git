// import { foo } from './foo.js';
function foo() {
  var x = 1;
  this.a = 2
  console.log(x, i)
}
// var { foo } = require('./foo.js')
var i = 0;
console.log('i', i)
// var obj = {
//   a: 1
// }
// foo.call(obj)
foo();
console.log('i', i)
i++ 