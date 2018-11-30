1. babel class 编译
    .babelrc 不可少，presets数组 env 默认
    - js 面向对象是原型式的 es5里面定义
    function Person(){}  构造函数 
    Person.prototype ={}
    es6 class constructor 只不过是语法糖而已
    - es5的构造函数可以作为普通函数来执行，
        class es6 babel 编译时 如何杜绝？

    - es6的prototype 属性不可枚举 enumerable
    Object.keys()
    Object.getOwnPropertyNames(Person.peototype)