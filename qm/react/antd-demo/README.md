1. 一切资源皆可打包 webpack 就是一个bundle
import logo from './logo.svg' 图片也可引入到js中
参与js的运算
在react里引入css img 
组件 是 封装了或者组合了一些html，完成一个特写的功能，
并以一个自定义标签的形式向外提供html,css,js
antd UI风格， 小蚂蚁，大力量配置优先
2. 路由接管一切，配置在最面，
<Router>
  <Route path="" component=""></Route>
</Router>

有两种路由 BrowserRouter(高级浏览器 mobile，URL更好理解) HashRouter(兼容性好 支持IE9以上的)
history.pushState(state,title,url)
