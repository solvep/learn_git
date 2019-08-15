// https://zachrey.cn/2018/10/27/promise-%E5%8E%9F%E7%90%86%E5%88%86%E6%9E%90%E4%B8%8E%E5%AE%9E%E7%8E%B0/
// 1. 首先，constructor是必须的
    // - 初始化状态
    // - 对传入的参数resolver进行类型判断，容错处理
    // - 执行传入的resolver函数
    // - 定义redolver和reject函数
// 首先我们定义三种状态，着三个状态是在整个promise类的外层
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class myPromise{
    constructor(resolver){
        if(typeof resolver !== 'function'){
            throw new Error('It is not function')
        }
        this.status = PENDING  //初始化状态为pending
        this.data = null // 初始化数据变量
        this.fulfilledCallbacks = [] //当状态变成fulfilled时候，执行的队列函数
        this.rejectedCallbacks = [] //当状态变成rejected
        
        resolve = (data) =>{
            setTimeout(() =>{
                if(this.status !== PENDING) return
                this.status = FULFILLED
                this.data = data
                let currentCallback
                for(let i = 0; i<this.fulfilledCallbacks.length;i++){
                    currentCallback = this.fulfilledCallbacks[i]
                    typeof currentCallback ==='function' && currentCallback(this.data)
                }
            },0)
        }
        reject = (data) =>{
            setTimeout(() =>{
                if(this.status !== PENDING) return
                
                this.data = data
                this.status = REJECTED
                let currentCallback
                for(let i = 0;i< this.rejectedCallbacks.length ;i++){
                    currentCallback = this.rejectedCallbacks[i]
                    typeof currentCallback === 'function' && currentCallback(this.data)
                }
            },0)
        }
        try{
            resolver(resolve,reject)
        }catch(e){
            reject(e)
        }
    }
    then
}


// 模拟其他语言中的 sleep，实际上可以是任何异步操作 使用promise处理

const sleep = (timeountMS) => new Promise((resolve) => {
    setTimeout(resolve, timeountMS);
});
const sleep =  (time) => new Promise((resolve)=>{
    setTimeout(resolve,time)
})
(async () => {  // 声明即执行的 async 函数表达式
    for (var i = 0; i < 5; i++) {
        await sleep(1000);
        console.log(new Date, i);
    }

    await sleep(1000);
    console.log(new Date, i);
})();
https://zachrey.cn/2018/10/27/promise-%E5%8E%9F%E7%90%86%E5%88%86%E6%9E%90%E4%B8%8E%E5%AE%9E%E7%8E%B0/