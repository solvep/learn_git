// 接口 Interface 英雄就可以替换使用,解耦
const Ryu = {
    name:'Ryu',
    attack(){

        console.log(this.name + '攻击')
    },
    defense(){
        console.log(this.name + '防御')
    },
    jump(){
        console.log(this.name + '跳跃')
    },
    crouch(){
        console.log(this.name + '蹲下')
    }
}

// 回放功能 , 数据结构 ,栈,数组...
const commandStack = [];


const makeCommand = function(receiver,state){
    // 命令的对象的生成者，按键对应的操作出来了，这样就解耦
    // 目的不是执行函数,而是找到对应的对象的相应动作函数,进行返回
    return function(){
        // console.log(receiver[state])
        if(receiver[state]){
        receiver[state]();
        }
    }
}
const commands = {
    "119":"jump",
    "115":"crouch",
    "97":"defense",
    "100":"attack"
}

document.onkeypress = function(ev){
    var keyCode = ev.keyCode;
    var command = makeCommand(Ryu,commands[keyCode]);
    if(command){
        commandStack.push(command);
        command();
    }
}

document.getElementById('backBtn').addEventListener('click',function(){
    // commandStack  操作的历史,makeCommand 返回了命令对象,在开发中有很多命令时,请记起来命令模式
    var commad;
    while(command = commandStack.shift()){
        command();
    }
},false);