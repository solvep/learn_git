全局状态
打破层次关系,实现共享
redux ? context也可以

- context API redux 依靠他
  childContextTypes = {   保险安全
    store:
  }
  getChildContext () {
    return {store:{}}
  }
context 四步
  - ChildContextTypes 顶层组件中规定类型
  - getChildContext 顶层组件中设置数据
  - 后代组件通过contextTypes规定数据类型
  - 后代组件this.context获得数据

全局的store 太烦了，不是react 数据流的语法结构的烦，context
api 代码的重复，dry dont repeat yourself 
生命周期 _setState() contextTypes connect react-redux HOC


- connect 封装, 有关于context的操作都交给他
- 后代组件，只需要做自己的事

