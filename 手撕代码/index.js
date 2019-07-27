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
window.addEventListener('scroll', debounce(handle,1,2,3));
function handle(a,b,c) {
  console.log(a,b,c)
  console.log(Math.random()); 
}
 //防抖：任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。
 function debounce(fn,...arr){ //防抖
  let timeout = null;
  return function(){
    clearTimeout(timeout)
    timeout =  setTimeout(()=>{
      fn.call(this,...arr)
    },1000)
  }
}

//节流：指定时间间隔内只会执行一次任务
function throttle(fn){
  let canRun = true
  if(!canRun){
    return
  }
  canRun = false 
  setTimeout(() =>{
    fn.call(this,...arguments)
    canRun = true
  },1000)
}


// 让数组乱序
let arr = [1,2,3,4,5,6,7,8,9,10];
arr.sort(()=>Math.random() - 0.5)


// 防抖：
function debounce(fn,...args){
  let timeout = null;
  return function(){
    clearTimeout(timeout)
    timeout = setTimeout(()=>{
      fn.call(this,...args)
    },1000)
  }
}

function throttle(fn,...args){
  let canRun = true
  if(!canRun){
    return;
  }
  canRun = false;
  setTimeout(()=>{
    fn.call(this,...args)
    canRun = true
  },100)
}