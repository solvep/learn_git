// 使用set es6
function unqiue(arr){
    return Array.from(new Set(arr))
}
const arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unqiue(arr))

// es5 常用的两层循环

function unqiue1(arr){
    for(var i =0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i] === arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}
console.log(unqiue1(arr))

console.log([...arr])