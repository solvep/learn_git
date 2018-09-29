//男主角
//json object
//描述着，对象就出来了
var xiaoming ={
    name:'xiaoming',
    sex:'man',
    single:true,
    classroom:'161',
    hometown:'赣州',
    sendFlower:function(target,){
        target.receiveFlower(this);
    }
};

// 送花 动作 
// json 构建了两个对象 现实世界中具有的属性 描述出来
// js 动态语言，很简单，随意，表现力
// class 属性 方法

var xiaohong = {
    name:'xiaohong',
    sex:'woman',
    single:true,
    classroom:'161',
    receiveFlower:function(){
        console.log('小红收到鲜花');
    },
    listenGoodMod:function(){
        // 定时器
        if()
        setTimeout(() =>{
            this.receiveFlower();
        },10000);
    }
};
var xiaoli = {
    name:'xiaoli',
    sex:'women',
    hometown:'赣州',
    single:true,
    //实现同一个方法接口
    receiveFlower:function(sender){
        // if(target.name != 'xiaoming'){
        //     console.log('gun');
        // }else{
        //     console.log('还是我们在一起吧！');
        // }
        // 小丽该怎么办？
        // 把花转给小红
        // 如何优化？ 小红心情不太好，
        // 小红的心情好时再送话，10s 监听心情
        // 心情好（10s），再送花
        xiaohong.listenGoodMod();
        // xiaohong.receiveFlower(sender);
    }
   
};
// 小明找小丽代为给小红送花
// 又要有一个对象 小丽 JSON
// 对象间的复杂关系，设计模式
// 小明 先给小丽 代理 proxy ，
//  1，省的壮士断腕
//  2.小丽了解小红的情况，心情如何？


console.log(xiaoming.name); 
//送花对象变了，只要实现同样的方法（接口），实现对象的互换
xiaoming.sendFlower(xiaoli);