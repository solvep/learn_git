const obj1 = {
    a: 1,
    b: 2,
    c: 3
  }
  
  const obj2 = {
    ...obj1,
    d: 4,
    e: 5,
    f: 6
  }
  const obj2New = Object.assign({},obj1)
  obj2New.a = 100 
  console.log(obj1)
  console.log(obj2)
  console.log(obj2New)