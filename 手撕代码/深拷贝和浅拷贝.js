function debounce(fn,time){
  let timeout = null
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
      let arg = [...arguments].slice().splice(0,2);
      console.log(arg)
      fn.call(this,...arg)
    },time)
  }
}

fn = ()=>{
  console.log('aaaaa')
}
let btn = document.getElementById('btn')
btn.addEventListener('click',debounce(fn,1000))

// 深拷贝和浅拷贝
deepclone =(arr) =>{
  return JSON.parse(JSON.stringify(arr))
}
let arr = [11,[22,44],33]
let newArr = deepclone(arr)
newArr[1][2] = 'aa'

console.log(newArr)
console.log(arr)


console.log(arr,newArr)