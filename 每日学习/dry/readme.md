6.11
js 的运行环境有三种情况 全局环境 函数环境 eval （不建议使用）
js引擎会以栈的方式来处理他们，这个栈我们称之为函数调用栈，栈底永远都是全局上下文。
执行上下文可以理解为函数的执行环境，每一个函数创建时，都会给对应函数创建一个这样的执行环境。
函数调用栈和作用域链 是不同的概念。
为什么不使用eval() ，因为js引擎会在编译阶段进行数项性能优化，其中有些优化可以根据代码的词法进行静态分析，并预先确定所有变量和函数的位置。
执行上下文的创建 ： 

变量对象的创建：
1.建立arguments对象，检查当前上下文中的参数，建立该对象下的属性与属性值。
2.检查当前上下文的函数声明，也就是当前function 关键字声明的函数。在变量对象中以函数名建立一个属性，属性值为该函数所在内存地址的引用。如果函数名的属性已经存在，那么该属性将会被新的引用覆盖。
3.检查当前上下文中的声明，每找到一个变量声明，就在变量对象中以变量名建立一个属性。属性为undefined。如果变量名的属性已经存在，为了防止同名的函数被修改为undefined，则会直接跳过，原属性值不会被修改

function 声明会比var声明优先级更高一点。
面试官问，变量对象和活动对象有什么区别，他们其实都是同一对象，只是处于执行上下文中的不同周期。创建周期，变量对象。执行周期，活动对象。不过只有处于函数调用栈栈顶的执行上下文变量对象，才会变成活动对象。
vo :  { // 变量对象
arguments:{.....},  //在浏览器中，函数的参数可能并不是放在arguments对象中。
foo：<foo reference> //表示foo的地址引用
a: undefinde
}
未进入变量执行阶段前，变量对象中的属性都不能访问！但是进入执行阶段后，变量对象转变为活动对象。
AO : { //活动对象
arguments:{.....}, 
foo：<foo reference>,
a : 1,
this : window} 
全局上下文的周期与程序的生命周期一致，只要程序运行不结束，比如关掉浏览器窗口，全局上下文就会一直存在。
作用域与执行上下文是完全不同的两个概念。我知道很多人会混淆他们，但是一定要仔细区分。
js代码的整个执行过程，分为两个阶段，代码编译阶段与代码执行阶段。编译阶段由编译器完成，将代码翻译成可执行 代码，这个阶段作用域规则会确定。执行阶段由引擎完成，主要任务是执行可执行代码。执行上下文在这个阶段创建。


作用域链式由当前环境与上层环境的一系列变量对象组成，它保证了当前执行环境对符合访问权限的变量和函数的有序访问。
this的指向是在函数被调用的时候确定的。
在函数执行过程中，this一旦被确定就不可更改了。
call() , apply() call是一个一个的传递，apply是以数组的形式传递。

6.23
纯函数：相同的输入总会得到相同的输出，并且不会产生副作用的函数，就是纯函数
数组的操作，会改变原数组：pop,shift,push,unshift,sort,reverse,splice
不会改变原数组：concat,slice,join,split,toString/
回文判断：split->字符串到数组，join->数组到字符串，reverse->数组倒置
slice 类数组转化为数组

颗粒化是指这样一个函数，他接收函数A作为参数，运行后能返回一个新的函数。并且这个新的函数能够处理函数A的剩余参数。

防 抖：function deboundce(fn,time){
    let timeout = null;
    return function(){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            fn.call(this,...argument)
        },time)
    }
}

节 流：规定的时间内只能执行一次。
 function throttle(fn){
    let canRun = true
    if(!canRun){
        return
    }
    canRun = false
    setTimeout(()=>{
        canRun = true
        fn.call(this,argument)
    },time)
}

in 常用来判断当前页面是否在移动端打开 isMobile = 'ontouchstart' in document;
很多人喜欢用ua，但不是很好的方法

获取元素的样式：document.defaultView.getComputedStyle ： elem.currentStyle[property]