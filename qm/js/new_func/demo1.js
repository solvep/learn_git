// new ? 实例化过程是怎么底层？
// Otaku类 抽象概念 等待被new 
//宅
function Otaku(name,age){
    this.name = name ;
    this.age = age;
    this.habit = 'Games';
}
Otaku.prototype.strenth = 60;
Otaku.prototype.sayYourName = function(){
    console.log('I am' + this.name);
}

// new 
// 1. 返回一个实例{} 声明，拥有Otaku函数中加的那些属性
// 2. 实例可以访问到Otaku.prototype 中的属性
// new 是js关键字 无法替代 
function objectFactor(fn,...args){
    var obj = new Object(); // {}; 1 返回一个新的空的对象
    Constructor = [].shift.call(arguments);
    // console.log(arguments);
    // console.log(Constructor);
    // 2 this 要指向新的对象
    // 3让构造函数执行
    obj.__proto__ = Constructor.prototype
    Constructor.apply(obj,arguments);
    // obj 上拥有constructor 上所有的属性？
    // 函数也是对象，对象上就可以有属性or方法
    return obj;
}
// 1 构造函数 2 其余是构造函数需要的参数
const didi = objectFactor(Otaku,'kevin',18);
didi.sayYourName();