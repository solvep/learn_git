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
//   console.log(new F());
//   Target.prototype.constructor = Target;
//   Target.prototype.uber = Origin.prototype;   //继承谁
// }
// inherit(Son,Father);
// Son.prototype.sex = 'male'
// var son = new Son();
// var father = new Father();

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

