"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    // es6 constructor
    function Person() {
        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: "sayHello",
        value: function sayHello() {
            return this.name;
        }
    }]);

    return Person;
}();
// 让我们的构造函数不可以当作一般的函数来运行
// function _classCallCheck(instance, Constructor) { 
//         if (!(instance instanceof Constructor)) {
//              throw new TypeError("Cannot call a class as a function"); 
//         }
//  }
// function Person(name){
//     // 将Person 函数作为普通函数来调用
//     _classCallCheck(this,Person);
//     this.name = name;
// }

// Person('唐唐');

// es5 构造函数
// function Person(name){
//     this.name = name;
// }
// Person.prototype = {
//     sayHello:function(){
//         return this.name;
//     }
// }
// var lilei = new Person('lilei');
// console.log(lilei);
// const hanmeimei = Person('hanmeimei');
// console.log(hanmeimei)
// class Person{
//     foo = "bar";
//     constructor(name){
//         this.name = name;
//     }
//     sayHello(){
//         return `I am ${this.name}`;
//     }
// }

// const lilei = new Person('李雷');
// console.log(lilei.sayHello());
