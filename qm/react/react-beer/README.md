军队危机时接管程序
应用只是页面？当然要路由，路由接管一切。
按 url 分发组件(Page级别)
根路由App->
    path'/a'页面A级别组件(Page)-> 容器组件Container-> 函数式组件(Present)
    path'/b'页面B级别组件(Page)-> 容器组件Container-> 函数式组件(Present)

- Link
    a太弱了。所以react-router 给了我们Link组件
    to = href    params ...满足单页应用需要的一切
- h5上的history api 更新url，页面不用刷新
- ref react 里的id DOM编程  可以利用它找到jsx的片段
    React.createRef() 返回一个不重复的id
    this.searchRef.current
- context 最后一个大佬 component lifecycle state，事件 函数式组件  
    this.context.router.history.push('/search/:') 跳往这个地方