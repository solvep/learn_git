function* listPeople(){
  let i=0;
  yield i;
  i++;
  yield i;
  i++;
  yield i;
}

const people = listPeople();
while(!people.next().done){
  console.log(people.next());
}