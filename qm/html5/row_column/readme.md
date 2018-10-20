在pc端弹性布局要少用，除非所有用户都是chrome
如何设计一个跨终端的网页栅格系统，4等分（pc) ,三等分（ipad），二等分（手机）

- Twitter Bootstrap 是自适应的前端框架，一份代码，到处运行。
在一个col 上定义多个尺寸，
media query
.col-lg-n  超大电脑  1200px min-width
.col-md-n  中等电脑 笔记本  >1000px 
.col-sm-n  ipad         >768 <1024
.col-xs-n  手机           <768 max-width 767


- .container
  .