function type (origin){
  var toStr = Object.prototype.toString,
      template ={
        "[object Array]":"array",
        "[object Object]":"object",
        "[object Number]":"number - object",
        "[object Boolean]":"boolean - object",
        "[object String]":"string - object",
      }
  if(origin === null){
    return 'null';
  }
  if(typeof(origin) == 'object'){
    var str = toStr.call(origin);
    return template[str]
  }else{
    return typeof(origin)
  }
}


// 遍历对象 for(var prop in obj)
// 1.判断是不是原始值    typeof() object 
// 2.判断是数组还是对象   instanceof toString constructor
// // 3.建立相对的数组或对象   递归    
function deepClone(origin,target){
  var target = target || {},
      toStr = Object.prototype.toString,
      arrStr = "[object Array]";
  for (var prop in origin){
    if(origin.hasOwnProperty(prop)){
      if(origin[prop] !== null && typeof(origin[prop]) == 'object'){
        target[prop] = (toStr.call(origin[prop]) == arrStr) ? []:{}
        deepClone(origin[prop],target[prop])
      }else{
        target[prop] = origin[prop]
      }
    }
  }
  return target
}


var inherit = (function(){
  var F = function(){};
  return function(Target , Origin){
    F.prototype = Origin.prototype;
    Target.prototype = new F();  
    Target.prototype.constructor = Target;
    Target.prototype.uber = Origin.prototype;   //继承谁
  }
}())


var retBety = function(str){
    let num = str.length;
    for (i =0 ; i<str.length ; i++){
      if (str.charCodeAt(i) > 255){
        num++;
      }
    }
    return num;
  }