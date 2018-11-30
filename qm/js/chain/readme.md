链式调用 chain
非常优雅
很简单 将我们的方法面向对象化(prototype), 每个函数做完功能后 return this(对象)
$('div') 返回一个jQuery(Fn) 对象
JQuery.prototype = {
  method: return this;
} 
