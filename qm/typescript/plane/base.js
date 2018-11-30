// egret Main 类 继承EventTarget.DisplayObjectContainer 快速的进行开发
class Main extends egret.DisplayObjectContainer{
    constructor(){
        super();
        // 如果子类要有自己的构造函数代码，选择运行父类的构造函数
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    onAddToStage(event){
        let textField = new egret.TextField();
        this.addChild(textField);
        textField.textColor = 0xff0000;
        textField.text = "hello world"
    }
} 

window['Main'] = Main;
egret.runEgret();