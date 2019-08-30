function revers(str){
  return str.split(/\s/).map((item)=>{
    return item.split('').reverse().join('')
  }).join(' ')
}

console.log(revers("Let's go to"))  
// 计数二进制字串
function find(str){
  let j = str.match(/^(0+|1+)/)[0]
  let o = (j[0] ^ 1).toString().repeat(j.length);
  let reg = new RegExp(`^(${j}${o})`)
  if(reg.test(str)){
    return RegExp.$1;
  } else {
    return ''
  }
}
function countBinarySubstring(str){
  if(typeof str !== 'string'){
    return new Error('must type string')
  } else {
    var res =[];
    for(let i = 0; i<str.length -1 ;i++){
      let r = find(str.slice(i));
        if(r){
          res.push(r)
        }
    }
  }
  return res.length
}
console.log(countBinarySubstring('10101')) 