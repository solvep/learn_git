let arr = [11,22,12,24,23,58,68,123,2,3,5,6]
// const fileter = arr.filter((element,index,arr)=>{
//     console.log(arr[index])
//     return element >= 10
// })
const some = arr.some((element)=>{
    return element >= 2
}) 
console.log(arr)
console.log(some)

var v1 = 'abc';
var v2 = true;
var v3 = 10;
var obj = Object.assign({}, v1, v2, v3);

console.log(obj); 