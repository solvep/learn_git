// isbn title author
// public 有问题
// 私有化
// 立即执行函数         book的值会等于立即函数的结果
var Book = (function(){
    // 闭包，闭合的空间声明的就是私有变量
    var numofBooks = 0;
    return function(newIsbn,newTitle,newAuthor){
        //局部作用域内的变量
        console.log(newIsbn,newTitle,newAuthor);

        var isbn,title,author;

        var checkIsbn = function(isbn){
            if(!isbn || typeof isbn !== 'string'){
                throw new Error('Book:Inavlid isbn');
            }
            return true;
        }
        this.setTitle=function(newTitle){
            title=newTitle || 'No title Specified';
        }
        this.getTitle = function(){
            return title;
        }
        this.setIsbn=function(newIsbn){
            isbn=newIsbn || 'No isbn Specified';
        }
        this.getIsbn=function(){
            return isbn;
        }

        this.setTitle(newIsbn);
        this.setTitle(newTitle);
        numofBooks++;
        this.getNumOfBooks = function() {
            return numOfBooks;
          }
      
        console.log(`创建了第${numofBooks}本书`)
        //constructor
    }
})();

Book.converToTitleCase = function(inputString){
    return inputString.toUpperCase();
}

Book.prototype = {
    display:function(){
        console.log(`这本书名是${this.getTitle()},作者是${this.getAuthor()}`);
    }
}

var book = new Book('123','飞鸟集','泰戈尔');
var book2 = new Book('1233','html','喻导');
console.log(book2.getTitle());