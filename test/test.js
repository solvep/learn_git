

// // inherit 2/1
// Father.prototype.lastName = "Deng";
// function Father (){
//   this.name = 'xiaozhang'
// }
// function Son(){}
// function inherit (Target , Origin){
//   var F = function(){};
//   F.prototype = Origin.prototype;
//   Target.prototype = new F();
//   Target.prototype.constructor = Target;
//   Target.prototype.uber = Origin.prototype;   //继承谁
// }

// function inherit(Target,Origin){
//   var F = function(){};
//   F.prototype = Origin.prototype;
//   Target.prototype = new F();
//   Target.prototype.constructor = Target;
//   Target.prototype.uber = Origin.prototype;
// }
// inherit(Son,Father);
// Son.prototype.sex = 'male'
// var son = new Son();
// var father = new Father();
// YUI库的继承
// var inherit = (function(){
//   var F = function(){};
//   return function(Target , Origin){
//     F.prototype = Origin.prototype;
//     Target.prototype = new F();  
//     Target.prototype.constructor = Target;
//     Target.prototype.uber = Origin.prototype;   //继承谁
//   }
// }())

// var name = "222";
// var a = {
//   name:'111',
//   say:function(){
//     console.log(this.name);
//   }
// }
// var b = {
//   name : '333',
//   say:function (fun){
//     fun()
//   }
// }
// b.say(a.say)

// var obj = {
//   name :'abc',
//   age:12,
//   aaa:null,
//   card:['visa','master'],
//   wife:{
//     name:'bcd',
//     son:{
//       name:'aaa'
//     }
//   }
// }
// var obj1 = {}
// 遍历对象 for(var prop in obj)
// 1.判断是不是原始值    typeof() object 
// 2.判断是数组还是对象   instanceof toString constructor
// // 3.建立相对的数组或对象   递归     
// function deepClone(origin,target){
//   var target = target || {},
//       toStr = Object.prototype.toString,
//       arrStr = "[object Array]";
//       for (var prop in origin){
//         if(origin.hasOwnProperty(prop)){
//           if(origin[prop] !== null && typeof(origin[prop]) == 'object'){
//             target[prop] = (toStr.call(origin[prop]) == arrStr) ? [] : {}
//             deepClone(origin[prop],target[prop]);
//           }else{
//             target[prop] = origin[prop]
//           }
//         }
//       }
//       // return target;
// }
// deepClone(obj,obj1)
// console.log(obj1)
// function deepClone(origin,target){
//   var target = target || {},
//       toStr = Object.prototype.toString,
//       arrStr = "[object Array]";
//   for (var prop in origin){
//     if(origin.hasOwnProperty(prop)){
//       if(origin[prop] !== null && typeof(origin[prop]) == 'object'){
//         target[prop] = (toStr.call(origin[prop]) == arrStr) ? []:{}
//         deepClone(origin[prop],target[prop])
//       }else{
//         target[prop] = origin[prop]
//       }
//     }
//   }
//   return target
// }
// var a = 1;
// var b = 2;
// function test (a,b){
//   var a = a;
//   a++;
//   return a
// }

// test(a,b)
// console.log(a)
// var retBety = function(str){
//   let num = str.length;
//   for (i =0 ; i<str.length ; i++){
//     if (str.charCodeAt(i) > 255){
//       num++;
//     }
//   }
//   return num;
// }
// var arr = ['asdfa','爱丽丝的分解啊','asdfa阿斯蒂芬','fa阿','fa阿','fa阿s'];
// var newStr = arr.join("-")
// var str = newStr.split("-")
// arr.sort(function (a,b){

//   return retBety(a) - retBety(b);

// })
// arr.splice()

// function test() {
//   console.log(arguments)
// }

// test(1,2,3,4,3,7,2)

// var obj = {
//   0:'a',
//   1:'b',
//   2:'c',
//   length:3,
//   push:Array.prototype.push,
//   splice:Array.prototype.splice
// };
// function type (origin){
//   var toStr = Object.prototype.toString,
//       template ={
//         "[object Array]":"array",
//         "[object Object]":"object",
//         "[object Number]":"number - object",
//         "[object Boolean]":"boolean - object",
//         "[object String]":"string - object",
//       }
//   if(origin === null){
//     return 'null';
//   }
//   if(typeof(origin) == 'object'){
//     var str = toStr.call(origin);
//     return template[str]
//   }else{
//     return typeof(origin)
//   }
// }
// function Car (){

// }

// var car = new Car ();
// Array.prototype.unique = function(){
//   var obj ={},
//     len = this.length ,
//     arr = [];
//   for(let i = 0; i<len ; i++){
//     if(!obj[this[i]]){
//       obj[this[i]] = "abc";
//       arr.push(this[i])
//     }
//   }
//   return arr
// }

// // var arr = [11,2,4,5,3,2,3,4,35]
// var num = 123;
// num.abc = 'abc';
// //new Number(num).abc = 'abc'   -->delete
// console.log(num.abc)
// str = '123';
// string = '123'
// if(NaN){
//   console.log('132')
// }
// console.log(undefined === undefined)

// 2/8
//  try {
//   document.write('e');
//   console.log(b);
//   console.log('c');
//   console.log('d');
//  }catch(e){
//   console.log(e.name + ':' + e.message)
//  }
//  "use strict";
//  a = 3;

// function getStyle(elem,prop){
//   if(window.getComputedStyle){
//     return window.getComputedStyle(elem,null)[prop]
//   }else{
//     return window.currentStyle[prop]
//   }
// }
 //第一步 实现promise的一个初步构建
// function myPromise(){
//   this.then = function (){
//     console.log('then method start!');
//   }
// }

// var boilWater = function(){
//   return new myPromise();
// }

// boilWater().then();

//第二步，实现promise的

// function myPromise(fn){
//   let callback = null;
//   this.then = function (cb){
//     // console.log('then method start!');
//     callback = cb;
//   }
//   function resolve(val){
//     callback(val)
//   }
//   fn(resolve)
// }
// var boilWater = function(){
//   console.log("开始！")
//   return new myPromise(function(resolve,reject){ //resolve 成功 reject失败
//     setTimeout(function(){

//       resolve('烧水');

//     },2000);
//   })
// }
// boilWater().then(function(data){
//   console.log(data); //
//   console.log('结束！！');
// });

//第三步  加入链式 
//如果要支持多个then回调执行；
//队列！！！
// function myPromise(fn){

//   let self = this  //保证this的指向没有问题
//   self._resolve = []

//   let callback = null
//   this.then = function (cb){
//     // console.log('then method start!');
//     self._resolve.push(cb)
//     return self
//   }
//   function resolve(val){
//     self._resolve.array.array.forEach(callback => {
//       callback(val)
//     });
//   }
//   fn(resolve)
//   return 
// }
// var boilWater = function(){
//   return new myPromise(function(resolve,reject){ //resolve 成功 reject失败
//     setTimeout(function(){

//       resolve('烧水')

//     },2000);
//   })
// }
// var Tea = function (){
//   return new myPromise(function(resolve,reject){
//     setTimeout(function(){
//       resolve('茶叶！')
//     })
//   })
// }

// boilWater().then(function(data){
//   console.log(data) //
//   console.log('结束！！')
// }).then(function(data){
//   console.log(data)
// })
// 第四步 引入状态 pengding fulfilled rejectd

// function myPromise(fn){

//   let self = this  //保证this的指向没有问题
//   self._resolve = []
//   self.status = 'pengding'

//   let callback = null
//   this.then = function (cb){
//     if(self._resolve === 'pengding'){ }
//     // console.log('then method start!');
//     self._resolve.push(cb)
//     return self
//   }
//   function resolve(val){
//     self._resolve.array.array.forEach(callback => {
//       callback(val)
//     });
//   }
//   fn(resolve)
//   return 
// }
// var boilWater = function(){
//   return new myPromise(function(resolve,reject){ //resolve 成功 reject失败
//     setTimeout(function(){

//       resolve('烧水')

//     },2000);
//   })
// }
// var Tea = function (){
//   return new myPromise(function(resolve,reject){
//     setTimeout(function(){
//       resolve('茶叶！')
//     })
//   })
// }

// boilWater().then(function(data){
//   console.log(data) //
//   console.log('结束！！')
// }).then(function(data){
//   console.log(data)
// })

// const p1 = new Promise((resolve, reject) => {
//   resolve('hello');
// })
// .then(result => result)
// .catch(e => e);

// const p2 = new Promise((resolve, reject) => {
//   throw new Error('报错了');
// })
// .then(result => result, result => result)

// Promise.all([p1, p2])
// .then(result => console.log(result))
// .catch(e => console.log(e));

// const p = Promise.race([
//   new Promise((resolve,reject) =>{
//     setTimeout(() => reject(new Error('request timeout')), 1000)
//   }),

//   Promise.reject().then(null,
//     ()=>{
//       setTimeout(() => reject(new Error('request timeout')), 5000)
//     }
//   )
// ])
// .then(console.log)
// .catch(console.error);
// // console.log(p1)
// // console.log(p2)

// const p = Promise.resolve();
// console.log(p)

function getFoo () {
  return new Promise(function (resolve, reject){
    resolve('foo');
  });
}

const g = function* () {
  try {
    const foo = yield getFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
};

function run (generator) {
  const it = generator();

  function go(result) {
    if (result.done) return result.value;

    return result.value.then(function (value) {
      return go(it.next(value));
    }, function (error) {
      return go(it.throw(error));
    });
  }
  // console.log('it.next()', it)
  go(it.next());
}

run(g);


var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  function dpHandle(nums) {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    let dp = Array.from(new Array(n), () => new Array(n).fill(0));
    dp[0][0] = 0;
    dp[0][1] = nums[0];
    for (var i = 1; i < n; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
      dp[i][1] = dp[i - 1][0] + nums[i];
    }
    return Math.max(dp[n - 1][0], dp[n - 1][1]);
  }
  const ans1 = dpHandle(nums.slice(1))
  const ans2 = dpHandle(nums.slice(0, nums.length - 1))
  return Math.max(ans1, ans2)
};

console.log(rob([12,8,9,2,20]))

for (var i = 0; i < 5; i++) {
  setTimeout((function(i) {
    console.log(i);
  })(i), i * 1000);
}

// 判断移动端正则
export const MOBILE_REGEXP = /AppleWebKit.*Mobile.*/i

function once(fn) {
  let time = false
  return function(){
    if(!time){
      time = true
      fn.apply(this, arguments)
    }
  }
}
function test(){
  console.log('1111')
}
let tem = once(test)
tem()
tem()
// console.log('once', tem())
// console.log('once', tem())


function toRawType (value) {
  const _toString = Object.prototype.toString
  return _toString.call(value).slice(8, -1)
}
 console.log('toRawType(null)', toRawType(null))  // "Null"
 console.log('toRawType(/sdfsd/)', toRawType(/sdfsd/)) //"RegExp"
