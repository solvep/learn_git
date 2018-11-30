function Parent(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
  }
  
  Parent.prototype.getName = function() {
    console.log(this.name);
  }
  
  function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
  }
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
  Child.prototype.sayHello = function() {
    console.log(`Hi, i am ${this.name} . I am ${this.age}`)
  }
  var Child1 = new Child('kevin','18');
  Child1.colors.push('black');
  Child1.getName();
  Child1.sayHello();
