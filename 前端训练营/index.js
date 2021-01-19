var a = 0.1;
var b = 0.2;

const memory = new Float64Array(1)

memory[0] = a;

const intarr = new Uint8Array(memory.buffer)

console.log(intarr)

// 词法类型

Number
String
Object
Boolean
null
undefined
Symbol

// number grammer

// 0o 八进制
// 0b 二进制
Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON

ASCII
Unicode
// UCS U+0000 - U+FFFF

function check(zero) {
  if (1 / zero === Infinity) {
    return 1
  }
  if (1 / zero === -Infinity) {
    return -1
  }
}

class foo {
  constructor() {
    console.log(this)
  }
}
new foo()