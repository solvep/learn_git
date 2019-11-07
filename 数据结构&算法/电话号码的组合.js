// 公式运算
function  find(newArr){
  let res = []
  for(let i = 0 ;i<newArr[0].length ;i++){
    for(let j = 0;j<newArr[1].length  ;j++){
      res.push(newArr[0][i]+''+newArr[1][j])
    }
  }
  newArr.splice(0,2,res)
  return newArr
}
function phoneNum(str){
  let arr = ['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
  let newArr = str.split('').map((item)=>{
    return arr[item-2]
  })
  let res = find(newArr)
  while(res.length > 1){
    res = find(res)
  }
  return res;
}

console.log(phoneNum('23'))