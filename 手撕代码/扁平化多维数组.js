let c=[1,3,4,5,[6,[0,1,5],9],[2,5,[1,5]],[5]];
console.log(c.toString().split(',').map((item)=>+item))
console.log(c.toString().split(',').map((item) =>+item))
console.log(c.toString().split(',').map(item=>+item))
function reducer(arr){
    if(Array.isArray(arr)){
        return arr.reduce((pre,item)=>{
            return pre.concat(item instanceof Array ? reducer(item) : item);
        },[])
    }else{
        return new Error('must Array type!') 
    }
}
console.log(reducer(c))

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
<<<<<<< HEAD

function flatten(arr){
    return arr.reduce((pre,item)=>{
        return pre.concat(Array.isArray(item) ? flatten(item) :item)
    },[])
}
=======
>>>>>>> 4e8fb41b75d486e7e95c28f2ec50948b11977d24
let c=[1,3,4,5,[6,[0,1,5],9],[2,5,[1,5]],[5]];
function reducer(arr){
    if(arr instanceof Array){
        return arr.reduce((acc,val) =>{
            return acc.concat(Array.isArray(val) ? reducer(val) : val)
    },[])
    } else {
        return new Error('must Array type')
    }   
}

console.log(reducer(c))
console.log(c)
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
function filter(arr){
    if(typeof arr !== 'object' || arr == null){
        return new Error('must Array type')
    }
    let newArr =  [...new Set(arr.reduce((acc,item)=>{
        return acc.concat(Array.isArray(item) ? filter(item) : item)
    },[]))]
    newArr.sort((a,b)=>{
        return a-b
    })
    return newArr
}
console.log([...new Set(filter(arr))])