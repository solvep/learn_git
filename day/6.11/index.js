// new 运算符的实现
function create(con,...arguments){
  //创建一个对象
    let obj = {};
    //连接到原型
    Object.setPrototypeOf(obj,con.prototypeOf);
    //绑定this执行构造函数
    let result = con.apply(obj,arguments);
    //确保new出来是个对象。
    return result instanceof Object ? result : obj 
}