// 冒泡排序
function pop(a){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ;j < arr.length - i  ; j++){
            let tem;
            if(a[j] < a[j+1]){
                tem = a[j];
                a[j] = a[j+1];
                a[j+1] = tem;
            }
        }
    }
}
let arr = [1,5,6,3,456,1258,12,35,95]
pop(arr)
console.log(arr)

// 快速排序
function quicksort(a){
    
}

// 插入排序
function insertSort(arr){
    for(let i = 1;i < arr.length ;i++){
        let current = arr[i];
        let p = i;
        for(let j = i-1 ; j >= 0;j--){
            if(arr[j] > current){
                arr[j+1] = arr[j]
                arr[j] = current
            } else{
                break;
            }
        }
    }
    return arr
}
let arr = [1,5,6,3,456,1258,12,35,95]
console.log(insertSort(arr))
