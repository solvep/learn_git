// 功能：定义一个操作的数据库，支持mysql mongoDb
// 要求1 ： mysql mongoDb功能一样 都有 add update delete get 方法

// 数以约束统一的规范，以及代码重用
// 解决方案：需要约束规范所以要定义接口，需要代码重用所以用到泛型。
// 1. 接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范
// 2. 泛型：通俗的理解泛型就是用来解决 类 接口 方法的复用性。

interface DBI<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];

}
class mysql<T> implements DBI<T>{
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }    
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }

}
// 定义一个操作mssql数据库的类
class Mssql<T> implements DBI<T>{
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }    
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }

    
}

// 操作用户表，定义一个User类和数据表的映射

class User{
    username:string | undefined;
    password:string | undefined;
}

var u = new User();
u.username = '张三'
u.password = '123'
var oMysql = new mysql<User>();
oMysql.add(u)
