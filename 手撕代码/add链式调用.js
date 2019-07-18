Number.prototype.add = function(x, y) {
    if ([].toString.call(this).toLowerCase() !== '[object number]') {
      return (0).add(x, y);
    }
    // Number(this)是前面计算得到的值
    return Number(this) + x + y; 
  }
  
  var add = Number.prototype.add;
  console.log(add(1, 2).add(3, 4)); // 10
