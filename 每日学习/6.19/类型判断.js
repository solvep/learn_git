function type(elem) {
  if(elem == null) {
      return elem + '';
  }
  return toString.call(elem).replace(/[\[\]]/g, '').split(' ')[1].toLowerCase();
}

console.log(type([]));
console.log((toString.call([]).replace(/[\[\]]/g, '')));
console.log( 'apple people'.split(''))