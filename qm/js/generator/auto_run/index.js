var fetch = require('node-fetch')
function* gen(){
  var url = 'http://api.github.com/users/githup';
  var result = yield fetch(url);
  console.log(result)
  console.log(result.bio);
  // yield 1;
}
const genn = gen();
// console.log(genn.next());
// console.log(genn.next({ bio:'手持利剑，学号js闯天涯' }));

var result = genn.next()
console.log(result);
result.value.then(function(data){
  return data.json();
}).then(data =>{
  // console.log(data);
  console.log( genn.next(data));
})
