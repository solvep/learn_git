Array.prototype.fatherName = "Father";
const arr = [1, 2, 3];
arr.name = "Hello world";
let index;
console.log(arr.length);
for(index in arr) {
    console.log("arr[" + index + "] = " + arr[index]);
}
