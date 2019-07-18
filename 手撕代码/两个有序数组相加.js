function arrAdd(arr1,arr2) {
    let inx1 = 0;
    let inx2 = 0;
    let arr = []
    while(inx1 < arr1.length && inx2 < arr2.length){
        console.log('11')
        if(arr1[inx1]<arr2[inx2]){
            arr.push(arr1[inx1])
            inx1++;
        }
        if(arr2[inx2]<arr1[inx1]){
            arr.push(arr2[inx2])
            inx2++;
        }
        if(arr2[inx2] === arr1[inx1]){   
            arr.push(arr2[inx2])
            inx2++;
            inx1++;
        }
    }
    while(inx1 < arr1.length ){
        arr.push(...arr1.slice(inx1))
        break;
    }
    while(inx2 < arr2.length ){
        arr.push(...arr2.slice(inx2))
        break;
    }
return arr;
}
console.log(arrAdd([1,3,5,6,70],[2,4,8,9]))
console.log([1,3,5,6,70].slice(0,1)[0])