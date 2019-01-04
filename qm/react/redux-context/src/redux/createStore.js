
export const createStore = (state,storeChange) =>{
  // 订阅 发布者 是实现MVVM的底层
  const listeners = [];
  let store = state || {};
  const subscribe = (listen) =>listeners.push(listen);
  const dispatch = (action)=>{
    const newStore = storeChange(store,action);
    store = newStore;
    listeners.forEach(item =>item())
    // return store;
  }
  const getStore = () =>{
    return store
  }
  return {store,dispatch,subscribe,getStore};
}