// 设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构。

// insert(val) ：当元素 val 不存在时，向集合中插入该项。
// remove(val) ：元素 val 存在时，从集合中移除该项。
// getRandom ：随机返回现有集合中的一项。每个元素应该有 相同的概率 被返回。

function RandomizedSet(){
    this.list = []
}

// 实现一个批量请求函数 multiRequest(urls, maxNum)

// 要求：
// 要求最大并发数 maxNum
// 每当有一个请求返回，就留下一个空位，可以增加新的请求
// 所有请求完成后，结果按照 urls 里面的顺序依次打出

function multiRequest(urls, maxNum){

}


// const list = [1, 2, 3]
// const square = num => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num * num)
//     }, 1000)
//   })
// }

// async function test() {
//     for(let i =0;i < list.length ;i++){
//         const res = await square(list[i])
//         console.log(res)
//     }
// }



function test(){
    return 1,2
}
console.log(test())