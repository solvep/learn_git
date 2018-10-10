// 'use strict';

var Book = function(isbn,title,anthor,level){
    // 构造函数constructor
    console.log(typeof isbn);    //在非严格模式下this一定有指向的地方。
    //isbn 有一定的规则
    if(isbn === undefined){
        throw new Error('Book constructor require an isbn');
    }
    if(!this.checkIsbn(isbn)) {
        throw new Error('Book:Inavlid isbn');
    }   
    this.isbn = isbn;
    this.title = title  || 'No title Specified';  //默认
    this.anthor = anthor || 'No anthor';
    this.level = level;
}

Book.prototype={
    checkIsbn:function(isbn){
        if(isbn === undefined || typeof isbn !== 'string' ){
            return false;
        }
        if(isbn.length != 10 && isbn.length != 13){
            return false;
        }
        if(isbn.indexOf('-') == -1){
            return false;
        }
        return true;
    },
    getIsbn:function(){
        return this.isbn;
    },
    setIsbn:function(isbn){
        return this.isbn=isbn;   //isbn可以被随意设置吗？  超级管理员；
        console.log('您当前没有权限');
    },
    getTitle:function(){
        return this.title;
    },
    setTitle:function(title){
        console.log('您当前没有权限');
    },   
    getauthor:function(){
        return this.author;
    },
    setauthor:function(author){
        console.log('您当前没有权限');
    }


}                   //prototype的含义
// 函数的执行方式，决定this的指向  
// 1. 作为普通函数 this 指向全局  在浏览器段全局就是winder，后端就是global   为了指而指
// 当启用严格模式之后，undefined 
    // 2.作为对象的方法被调用时
    let book = new Book('122313-456');
    console.log(book.isbn,book.title,book.anthor);
    console.log(book instanceof Book);