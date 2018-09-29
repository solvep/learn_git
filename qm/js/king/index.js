const chior = [];  //乐队

var duck = {
    duckSing:function(){
        console.log('gagaga');
    }
}

// js 动态类型的语言
var chicken = {
    chickSing:function(){
        console.log('lololo');
    },
    // duckSing:function(){
    //     console.log('gagaga');
    // }

}
/*
*功能：加入合唱团
*params:animal 动物对象
chior 加入新成员
*/
function joinChior(animal){
    if(animal && typeof animal.duckSing == 'function'){
                 chior.push(duck);
              }//else{
            //      console.log('buhaoyisi')
            //  }
}

//函数式
for(var i=0;i<999;i++){
 joinChior(duck);
}
//现学 js 类 ，对象，动态的
chicken.duckSing=function(){
    console.log('gagaga');
}

joinChior(chicken);
console.log(chior.length);


//只有999只鸭子
// 1000要求 ，但举国只能找到999duck

// for(var i=0;i<999;i++){
//     if(typeof duck.duckSing === 'function'){
//         chior.push(duck);
//     }
// }
