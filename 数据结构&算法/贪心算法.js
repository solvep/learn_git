// 找局部最优解
// 贪心算法寻求局部最优，同时可是证明局部最优解累计的结果就是全局最优解， 则可以使用贪心算法。

function exchange(total, denos){
    if(total <=0 ){
        return []   //不用找零
    }
    //  寻找最大的面额， 同时要保证面额小于等于total
    var max = 0
    for(let i = 0;i< denos.length; i++){
        let deno = denos[i];
        if(deno > max && deno <=total){
            max = deno
        }
    }
    let res = [max];
    let next = exchange(total - max , denos)
    res = res.concat(next)
    return res
}

let total = 46
let denos = [25, 10, 5 ,1];
let res = exchange(total, denos)
console.log(res);

// 动态规划
// 防止分治法重复计算
// 青蛙跳台阶问题
// 有N级台阶， 一只青蛙每次可以跳1级或两级，一共有多种跳法