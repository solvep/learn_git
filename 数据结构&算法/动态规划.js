function p(n){
  if(n === 1){
    return 1
  } if(n === 2){
    return 2
  }
  return p(n-1)+p(n-2)
}

console.log(p(10))