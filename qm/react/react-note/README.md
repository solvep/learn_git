组件的形式 
  容器组件和函数组建之分，未来有高阶组件
  在构建组件时，选择合适的方式
路由页面下的组件树，页面级别，形成单页应用
不同状态下，细分组件行为，如下午讲的load当页面加载的时候出项load组件

1. JSX 内有些逻辑计较复杂，update content部分body的输出 
经过了计算一样，在vue 里计算属性 update 只是一个时间戳而已
react里面 把它作为一个组件方法
2. moment().fromNow()
结合_.truncate(,30)成为了列表显示的伴侣
之前的state里的一个值，计算成想要的形态，
3. 编辑表单 toggle 
{this.state.open && <Editor/>}