中间？ UI <-> redux
中间件 middleware 生态npm

UI  dispatch INCREMENT_ASYNC
何时触发 ？ 订阅发布者模式
中间处理一下 发布者 redux-thunk redux-saga 请求，setTimeout dispatch INCREMENT
redux

saga 是redux 状态异步处理的中间件，
原生的react 通过生命周期或者业务逻辑，来异步请求数据，耦合了redux 数据管理业务在UI之中
是不可取的，
- 异步是绝对不可能改变的，(axios,定时器)
    promise + generator*yield/async 
    await
    放到saga文件中
    watch每一个actionType，take给一个异步函数去执行，位于中间件中，仍然属于reduxcreateStore(reducers,applyMiddleware(sagaMinddleware))
    sagaMinddleware.run(rootSaga);
    takeEvery(ActionType,gen);
- redux 状态最终仍然是同步处理的，
  最后还是要来put一个同步的请求

- 异步流程很多，所以把他何为一处 all