6.11
js 的运行环境有三种情况 全局环境 函数环境 eval （不建议使用）
js引擎会以栈的方式来处理他们，这个栈我们称之为函数调用栈，栈底永远都是全局上下文。
执行上下文可以理解为函数的执行环境，每一个函数创建时，都会给对应函数创建一个这样的执行环境。
函数调用栈和作用域链 是不同的概念。
为什么不使用eval() ，因为js引擎会在编译阶段进行数项性能优化，其中有些优化可以根据代码的词法进行静态分析，并预先确定所有变量和函数的位置。
执行上下文的创建 ： 

变量对象的创建：
1.建立arguments对象，检查当前上下文中的参数，建立该对象下的属性与属性值。
2.检查当前上下文的函数声明，也就是当前function 关键字声明的函数。在变量对象中以函数名建立一个属性，属性值为该函数所在内存地址的引用。如果函数名的属性已经存在，那么该属性将会被新的引用覆盖。
3.检查当前上下文中的声明，每找到一个变量声明，就在变量对象中以变量名建立一个属性。属性为undefined。如果变量名的属性已经存在，为了防止同名的函数被修改为undefined，则会直接跳过，原属性值不会被修改

function 声明会比var声明优先级更高一点。
面试官问，变量对象和活动对象有什么区别，他们其实都是同一对象，只是处于执行上下文中的不同周期。创建周期，变量对象。执行周期，活动对象。不过只有处于函数调用栈栈顶的执行上下文变量对象，才会变成活动对象。
vo :  { // 变量对象
arguments:{.....},  //在浏览器中，函数的参数可能并不是放在arguments对象中。
foo：<foo reference> //表示foo的地址引用
a: undefinde
}
未进入变量执行阶段前，变量对象中的属性都不能访问！但是进入执行阶段后，变量对象转变为活动对象。
AO : { //活动对象
arguments:{.....}, 
foo：<foo reference>,
a : 1,
this : window} 
全局上下文的周期与程序的生命周期一致，只要程序运行不结束，比如关掉浏览器窗口，全局上下文就会一直存在。
作用域与执行上下文是完全不同的两个概念。我知道很多人会混淆他们，但是一定要仔细区分。
js代码的整个执行过程，分为两个阶段，代码编译阶段与代码执行阶段。编译阶段由编译器完成，将代码翻译成可执行 代码，这个阶段作用域规则会确定。执行阶段由引擎完成，主要任务是执行可执行代码。执行上下文在这个阶段创建。

作用域链式由当前环境与上层环境的一系列变量对象组成，它保证了当前执行环境对符合访问权限的变量和函数的有序访问。
this的指向是在函数被调用的时候确定的。
在函数执行过程中，this一旦被确定就不可更改了。
call() , apply() call是一个一个的传递，apply是以数组的形式传递。

6.23
纯函数：相同的输入总会得到相同的输出，并且不会产生副作用的函数，就是纯函数
数组的操作，
会改变原数组：pop,shift,push,unshift,sort,reverse,splice,forEach
不会改变原数组：concat,slice,join,toString,filter,map,reduce
some:只要有一个callback返回true则返回true
every：每一个都返回true才返回true
indexOf：不符合条件返回-1。其他数则为符合
回文判断：split->字符串到数组，join->数组到字符串，reverse->数组倒置

颗粒化是指这样一个函数，他接收函数A作为参数，运行后能返回一个新的函数。并且这个新的函数能够处理函数A的剩余参数。

防 抖：function deboundce(fn,time){
    let timeout = null;
    return function(){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            let args = [...argument].splice(0,2)
            fn.call(this,...argument)
        },time)
    }
}

节 流：规定的时间内只能执行一次。
 function throttle(fn){
    let canRun = true
    if(!canRun){
        return
    }
    canRun = false
    setTimeout(()=>{
        canRun = true
        fn.call(this,[...argument].slice(1))
    },time)
}

in 常用来判断当前页面是否在移动端打开 isMobile = 'ontouchstart' in document;
很多人喜欢用ua，但不是很好的方法

获取元素的样式：document.defaultView.getComputedStyle ： elem.currentStyle[property]


6.24

promise 有三种状态 pending：等待中，表示正在进行中还没得到结果。 resolved：已经完成，表示得到了我们想要的结果。rejected：也表示得到结果，但是结果并非我们所愿，因此拒绝执行。

我们常常使用let来声明一个值会被改变的变量，而使用const来声明一个值不会被改变的变量，也可以成为常量。const objDev = { a: 20,b: 30} obDev.a = 30;
解构 export { default } from './Button'
函数默认参数：functino add(x =20,y =30);
展开运算符 ... / arr1 = [1,2,3];
const arr2 = [...arr1,10,20,30];
和concat异曲同工，不会改变原数组。
Object.assign({},obj1,obj2)

 压缩文件大小，cdn服务和与获取prefetching都是管理HTTP请求的最佳选择。
 预先获取：1.连接预先获取。2.DNS预先获取。3.预先渲染。
 当你离开当前页面之前，使用预先获取方式，对应每个连接的URL地址，css，图片和脚本都会被预先获取。只需要在网站HTML中的连接属性上增加rel=‘prefetch’，rel=‘dns-prefetch’，rel=‘prerender’。

cdn内容分发网络，CDN允许您的网站访问者从最近的服务器加载数据。如果您使用CDN，您网站内的文件将自动压缩，以便在全球范围内快速分发。

如果您不使用CDN，您也可以考虑在源服务器上使用文件压缩的方法来改进前端优化。
文件压缩能使网站的内容轻量化，更易于管理。最常用的文件压缩方式之一是Gzip。着是缩小文档，音频文件，png图像等其他大文件的绝佳方法。现在facebook使用的是Brotli 

大多数浏览器通常会限制url长度在2k个字节。而服务器最多处理64k大小的url。
post和get 的区别。
get：参数在url ，传输的大小
post ：参数在 request body。

URL， 统一资源定位符。
scheme：//host.domain:port/path/filename
scheme - 定义因特网的服务的类型。http，https，ftp，file。
host- 定义域主机（http的默认主机是www）
domain - 定义域名
port - 端口号

websocket 握手过程

前端持久化的方式，区别。


6.25 
0.1 + 0.2 != 0.3 
js采用的IEEE754双精度版本，我们都知道计算机标识十进制是采用二进制表示的，所以0.1在二进制表示为：0.1 = 2^-4 * 1.10011（0011）
0.2 = 2^-3 *1.10011（0011）
parseFloat((0.1+0.2).tofixed(10))
toFixed() 方法使用定点表示法来格式化一个数值。
parseFloat() 函数解析一个字符串参数并返回一个浮点数。

十个 Ajax同时发送请求，全部返回展示结果，并且至多允许三次失败。
promist.all 这个函数有一个局限，失败一次就返回了。
思路：对失败的次数计数，失败次数大于3次就报错reject(error)

基于LocalStorage 设计一个1M 的缓存系统，需要实现缓存淘汰机制。
思路：
1.每个对象需要添加两个属性：分别是过期时间和存储时间。
2.利用一个属性保存系统中目前所占空间大小，每次存储都增加该属性，当属性值大于1M是，需要按照时间排序系统中的数据，删除一定量的数据保证能存储下目前需要存储的数据。
3.每次取数据时，需要判断缓存数据是否国企，如果过期就删除。


详细说明 event loop
js是门非阻塞单线程语言，宏任务（jobs）微任务（task）
微任务包括 process.nextTick ，promise ，Object.observe ，MutationObserver
宏任务包括 script ， setTimeout ，setInterval ，setImmediate ，I/O ，UI rendering
正确的一次Event loop
1. 执行同步代码，着属于宏任务。
2. 执行栈为空，查询是否有为任务需要执行。
3. 执行所有微任务。
4. 必要的话渲染UI
5. 然后开始下一轮Event loop，执行宏任务中的异步代码。

csrf跨站攻击：
    跨域请求伪造，以用户的名字伪造请求发送给被攻击站点。
    1. 验证token值
    2. 验证HTTP头的Referer
    3. 在HTTP头中自定义属性并验证。

富文本的核心方法：contenteditable属性 和 document.execCommand方法。
let range = window.getSelection().getRangeAt(0) 来获取选中内容信息

6.26

let const var的区别：1. 变量提升 ， 2.暂时性死区：如果代码块中有let const申明，一开始就形成了封闭作用域。凡是在申明之前使用这些变量都会报错。
3.重复声明：在相同作用域内，重复声明同一个变量。4. 初始值：const声明是只读的常量，一旦声明就必须立即初始化，声明之后值不能改变。

闭包：隐藏变量让别人不能直接访问，使用局部变量的话又访问不到

三栏式，两栏式布局：圣杯：html结构更简单一点，div+3div。使用float和margin为负数加上position：relative。双飞翼布局：html复杂点，使用float和margin为负。使用绝对定位和相对定位结合使用。使用flex。flex-basis：1，flex：1配合使用。

call和apply与bind的区别：call和apply改变了函数的this上下文
call是一个一个传递，apply是以数组的方式
作用：利用[].slice.call(argument)来将伪数组转化为数组。

未知宽高水平垂直居中：
1.使用position：absolute top.bottom,left,right=0,margin:auto;
2.使用absolute ,top:50%,right:50%,结合transform：translate（-50%，-50%）
3.使用disflex，flex，justify-content：center，align-item：center

6.27
代码一行一行敲，别粘贴复制，容易出错而且不易于以后的更改。

BFC：块级格式化上下文。他是一个独立的渲染区域，与外部毫不相干。
BFC布局规则：
1. 内部的box会在垂直方向，一个接一个地放置。
2. box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。
3. BFC的区域不会与float box重叠。
4. BFC的高度，浮动元素也参与计算。
根元素，float属性不为none ，position为absolute或fixed。
display：inline-block，flex。
overflow不为visible。
应用：
1. 两栏式布局的时候左边的元素为float：left，右边的正常显示的话会重叠，
这时候将右边的元素设置为BFC元素，
2. 清楚内部浮动：当div内部有浮动元素时，设置为BFC时就能计算到浮动元素的高度。
3. margin塌陷
BFC就是页面上一个隔离的独立容器 ，容器里面的子元素不会影响到外面的元素，反之也是如此

position：sticky 用来导航栏的布局，超酷

Array.from将类数组转化或者对象，转化为数组，浅拷贝。

ServiceWorkers:
6.29
适合事件委托的事件：click，mousedown,mouseup,keydown,keyup,keypress
e = e || window.event, e.target || e.srcElement, e.nodeName.toLowCase() == 'li'

https://github.com/yonyouyc/blog/issues/25

6.30 
async：https://segmentfault.com/a/1190000007535316
Even loop：https://segmentfault.com/a/1190000012806637
setTimeout：需要满足时间到了和主线程空闲

7.1
iframe缺点:
1. 会阻塞主页面的Onload事件
2. 搜索引擎的检索程序无法解读这种页面，不利于SEO
3. iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载
4. 如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值，这样可以绕开以上两个问题

<!DOCTYPE html>：
声明位于文档中的最前面，处于html标签之前，告诉浏览器的解析器，用什么文档类型规范来解析这个文档

7.2
animation是css3新增的动画属性，这个css3动画的每一帧是由@keyframes来声明的
keyftames声明了动画的名称，通过from，to或者是百分比来定义
作用域：收集维护声明的标识符，确定当前执行代码对这些变量的访问权限。
作用域链：保证执行环境里有权访问的标识符是有序的
平安科技壹钱包：
    1. DOM和BOM举例：dom是document  
bom： window：alert() 根本对象是window
    history：history.go(1)
    document：
    location：url的信息
    navigator：浏览器的信息
    screen：屏幕信息

    fliter方法
    assign方法
    some和every方法的区别
    没面完就没拉去谈需求了

7.4
怎么判断两个对象相等 
转化为字符串：JSON.stringify() JSON.parse()
避免src为空
requestAnimationFrame
createDocumentFrame

7.12
width = device-width

7.15
css 里面的单位：px，rem，em，vh，vw，s，deg
父关系：
parentElement:返回元素的父元素节点
parentNOde：返回元素的父元素节点，必须是Element元素
子关系：
childNodes：返回一个实时的Nodelist，表示元素的子节点列表。
firstChild：第一个子节点，firstElementChild
lastChild：最后一个子节点，lastElementChild
兄弟节点：
previousSibling：节点的前一个节点previous
nextSibling:
setAttribute
getAttribute
dataset
var json = '{"a":"1", "b":2}';
var obj = eval("(" + json + ")")

7.17
promise 的状态是不可逆的pendding，fulfilled，rejected
使用then是返回一个新的promise实例
all方法将多个promise实例，包装成一个新的promise实例
只有当promise返回的都是fulfill才是fulfill
只要有一个是rejected，p的状态就会变成rejected
react的生命周期
    componentWillMount
    render
    componentDidMount
    state改变shouldcomponentwillMount
    props改变 componentWillReciveProps
    componentWillupdate()
    render()
    componentDidUpdate
    componentWillUnmount
keyframe 搭配 animation

for in遍历的是数组的key不合适
for of遍历的是数组元素值
hasOwnProperty
7.6
json.stringify和json.pasInt
怎么区分一个方法是es5还是es6
7.13
类数组转化为数组：Array.from() 和 [...arr]
回纹判断：将字符串转化为数组split('').reverse().join('-')

7.23
空格：后代
> : 子代
~ ：后继
+ ：直接后继
