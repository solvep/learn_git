function* lyrics(){
  yield `But don't tell my heart`
  yield `My achy breaky heart`;
  yield `I just don't think he'd understand`;
  yield `And if you tell my heart`;
  yield `My achy breaky heart`;
  yield `He might blow up and kill this man`;

}
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879 },
  { first: 'Isaac', last: 'Newton', year: 1643 },
  { first: 'Galileo', last: 'Galilei', year: 1564 },
  { first: 'Marie', last: 'Curie', year: 1867 },
  { first: 'Johannes', last: 'Kepler', year: 1571 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
  { first: 'Max', last: 'Planck', year: 1858 },
];

const achy = lyrics();
for(const line of achy){
  console.log(line);
}
for(const line of inventors){
  console.log(line);
}

// 任何可以被迭代的都可以