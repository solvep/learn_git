## webpack 安装
- 安装本地的webpack
- webpack webpack-cli -D

## webpack可以进行0配置
- 打包工具 -> 输出后的结果（js模块）
- 打包（支持我们的js模块化）

## 手动配置
  - 默认文件webpack.config.js
  打包后的文件bundle.js其实就是一个匿名函数 立即执行
    ({
    "./src/a.js" :   //key -> 模块的路径
    (function(module, exports) {  //value函数
    eval("module.exports = 'world'\n\n//# sourceURL=webpack:///./src/a.js?");
    }),
    "./src/index.js":
    (function(module, exports, __webpack_require__) {
    eval("let str = __webpack_require__(/*! ./a.js */ \"./src/a.js\");\r\n\r\nconsole.log(str)\n\n//# sourceURL=webpack:///./src/index.js?");
    }
    });

## webpack打包我们的图片
 1） 在js中创建图片来引入
 // file-loader 默认会在内部生成一张图片到build目录先
 把生成的图片的名字返回回来
 let image = new Img()
 image.src = './logo.ong'; //就是一个普通的字符串
 document.body.appendChild(image);
 需要import logo from './logo/png';image.src = logo;  //把图片引入，返回的是一个新的图片地址
