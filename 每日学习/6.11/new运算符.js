// new 运算符的实现
// 1. new操作符返回一个对象，里面就要创建一个对象
// 2. 该对象可以访问到构造函数原型链上的属性或函数obj._proto_ = Con.prototype
// 3. 这个对象也就是构造函数的this 可以访问到挂载在this上的任意属性
// 4. 返回原始值需要忽略，确保返回的是对象。
function create(con,...arguments){
  //创建一个对象
  let obj = {};
  //连接到原型
  Object.setPrototypeOf(obj,con.prototype);
  //绑定this执行构造函数
  let result = con.apply(obj,arguments);
  //确保new出来是个对象。
  return result instanceof Object ? result : obj 
}
function Preson(name,age){
  this.name = name;
  this.age = age;
  // return 1;
}

Preson.prototype.getName = function(){
  console.log(this.name)
}
let self = create(Preson,'llj',22)
console.log(self.name)
console.log(self)
// self.getName()
// function create(){
//   let obj = {} //创建一个对象
//   let Con = [].shift.call(arguments) //获得构造函数
//   obj._proto_ = Con.prototype  //链接到原型
//   let result = Con.apply(obj,arguments) //绑定this 执行构造函数
//   return result instanceof Object ? result : obj //确保new出来是个对象
// }
