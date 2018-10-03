- css 命名规范   BEM
Block
    页面时由多个Block 构成的，跟其他的block区分开来，tabbar
    Element__
        在区块中负担的职责，取唯一性的名字
          并不是简单的父子关系
          __label
          __icon
        Modifier
        状态的修改
        __itme_n

- WEUI
 微信ui规范，内嵌公众号，小程序，调起webview，
 为了让用户体验一致，让用户有认同感。
 mobile web app
 前端框架 weui.css

- 组件
 大部分的项目70%都是通用组件构成的，
 组件，拿来用。
  1.tabbar
 .tabbar>a.item>(span>img+span.badge)+p
 词汇量 组件词汇tabbar 一般词汇
 item
 良好的结构和语义化标签
 弹性布局 flex 1：1：1