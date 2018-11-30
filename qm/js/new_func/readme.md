new 到底做了什么？
let p = new Person();
p 是 Object类型，person 函数类型 typeof
1. Parent 被执行,加了new后,Parent 函数会在p的作用域下执行
this.指向当前的作用域p 构造函数里的属性被当作p的属性被创建
2. p.__proto__ 指向person.prototype 
p就继承了 Parent.prototype中的属性和方法 