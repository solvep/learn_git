- 项目目录
    Page  三明治
    wxml weui 组件形成了页面布局 swiper组件
       wxml和html 不同的是前者在微信内部 直接抛弃了html，自己构建组件类似于html的标签  swiper直接可以使用滑屏功能
       wxss 微信的样式文件  给我们提供了一个rpx这样的一个单位;750rpx 设计稿是750rpx 使用markman去量;
       .js 文件 data数据绑定 事件监听   MVVM   视图层和模型层  json文件某个页面的配置文件  
       app.js  这是我们代码的入口
       app.json 项目级别的配置文件
       app.wxss  每个页面都可以使用的样式


        assets 静态资源文件

       这些是Page的基本架构
- 源码目录  
    wxss 开发起来效率太低了     使用stylus
    js文件  es6 =》es5 
    小程序是个用完即走   so 包很小   减少包的体积，压缩代码的需要


- gulp 任务管理控制流软件
    前端工作流： work flow
    node  搭建工作流程 npm 包 各司其职