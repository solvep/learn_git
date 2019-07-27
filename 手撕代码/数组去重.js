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

// 利用indexof
var array = [1, 1, '1', '1'];
function  unqiue2(arr){
    let newArr = [];
    for (let i = 1 ; i < arr.length ; i++){
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(unqiue2(array))

console.log(Array.from(new Set(array)))
console.log([...new Set(array)])

console.log([...array])

// 利用filter
var array = [1, 1, '1', '1'];
function unqiue3(arr){
    let res = arr.filter((item,index) =>{
        return arr.indexOf(item) === index;
    })
    return res;
}
console.log(unqiue3(array))

console.log(Array.from(new Set(array))) 

function unqiue9(arr){
    if(newArr.indexOf(arr) === -1){
        push
    }
}


arr.filter((item,index) =>{
    return arr.indexOf(item) === index
})

