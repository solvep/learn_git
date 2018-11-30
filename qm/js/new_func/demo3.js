function Parent(name){
    this.name = name;
}
let p = new Parent('张三');
console.log(Parent.prototype);   //设置这个类在他原型上的属性和方法
console.log(p.__proto__);
console.log(Parent.__proto__);