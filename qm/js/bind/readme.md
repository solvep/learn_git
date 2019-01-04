1. this 由函数调用方式
    普通函数 对象的方法 事件处理函数 闭包
2. this 作用域的问题手动指定
call apply 内部的this.指向 区别是参数
call 是,的序列 
apply 是数组
bind 可以实现延迟后执行 返回一个新函数 并且内部的this指定为第一个参数
3. 手写一个bind
Function.prototype.bind = 

3. bind 是展示this 闭包 函数式编程 原型链最直接的例子
this:
 - apply
    bind 是基于apply手动指定this为绑定对象的
 - 闭包区域
    this 由调用方式决定为被绑定的函数就是this
    self = this 在闭合空间里一直存在
2. 闭包
函数嵌套函数 闭包中的变量一直可以被访问
3. 函数式编程
    bind 返回一个新函数，解决了事件函数的this丢失 一般的事件listen this 指向了时间对象target
    在react 组件式开发或者是面对对象有需求，将事件的处理函数作为组件类的方法，即延迟调用，同时又手动指定this
    apply + 函数式
    return function(){
        self.apply(context)
    }