// 手写代码，
const race='100m Dash';
const winners = new Array('Hunber Gath','Singa song','Imda Bos');
Array.prototype.map = function(fn) {
     let value, ret = [];
    
    // 方法作为对象的方法调用时，this指向当前对象
    let arr = this;
    if (!Array.isArray(arr)) {
      throw new Error('只能对数组用map方法');
    } 
  
    // map功能
    for (let index = 0; index < arr.length;index++) {
        value = fn (arr[index], index, arr);

       if ( value != null ) {
        ret[ ret.length ] = value;}
    }
        return ret;
  }
  // 调用的方式
  const win = winners.map((winner, i) => ({
    name:winner,
    race,
    place:i+1

}));     
console.log(win);