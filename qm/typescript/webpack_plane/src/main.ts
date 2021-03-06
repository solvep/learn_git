// egret Main 类 继承EventTarget.DisplayObjectContainer 快速的进行开发
import { loadImage }  from "./assetsUtil";
class Main extends egret.DisplayObjectContainer{
    constructor(){
        super();
        // 如果子类要有自己的构造函数代码，选择运行父类的构造函数
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    onAddToStage(event){
        // let textField = new egret.TextField();
        // this.addChild(textField);
        // textField.textColor = 0xff0000;
        // textField.text = "您好"
        this.createGame();
    }
    async createGame(){
        // 加载资源 背景图片声音啥的 都要异步加载，每个加载都是http的请求 并行执行 Promise.All 
        const assets = [
            'assets/background.png',
            'assets/hero.png',
            'assets/enemy.png'
        ];
        // loadImage Promise 
        // assets => Promise[]
        const bitmaps = await loadImage(assets) as egret.Bitmap[];
        const [bg,hero,enemy] = bitmaps;
        this.addChild(bg);
        this.addChild(hero);
        this.addChild(enemy);
        this.centerAnchor(hero);
        this.centerAnchor(enemy);
        enemy.x = this.stage.stageWidth / 2;
        enemy.y = 200;

        hero.x = this.stage.stageWidth / 2;
        hero.y = this.stage.stageHeight - 100;
    }
    centerAnchor (displayObject:egret.DisplayObject){
        displayObject.anchorOffsetX = displayObject.width / 2;
        displayObject.anchorOffsetY = displayObject.height / 2;
    }
} 

window['Main'] = Main;
egret.runEgret();