function converStringToNumber(str) {
  var chars = str.split('')
  var number = 0
  for (let i = 0; i < chars.length; i++) {
    number = number * 10
    number += chars[i].codePointAt(0) - '0'.codePointAt(0)
  }
  return number
}
console.log(converStringToNumber('100s'))

for (let i = 0; i < 10; i++) {
  let i = 2
  console.log('i', i)
}

// 类似于

{
  let i = 0;
  {
    let i = 2
    console.log('i', 2)
  }
  console.log('i', 0)
}

for (let p of [1, 2, 3]) {
  console.log('p', p)
}

try {
  var a = 1
} catch (e) {
  a++
}

function sleep(t) {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve()
    }, t)
  })
}

