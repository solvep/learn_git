let c=[1,3,4,5,[6,[0,1,5],9],[2,5,[1,5]],[5]];
// console.log(c.toString().split(',').map((item)=>+item))

function fliter(arr){
    var res = [];
    for(var i =0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
           res = res.concat(fliter(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res;
}
console.log(fliter(c))

function flatten(arr){
    return arr.reduce((pre,item)=>{
        return pre.concat(Array.isArray(item) ? flatten(item):item)
    },[])
}

console.log(flatten(c))