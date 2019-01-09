export default function counter( state= 0, action){
  switch(action.type){
    case 'INCREMENT':
      return ++state;
    case 'INCREMENT_IF_ODD':
      return (state%2 !== 0)? ++state:state;
    case 'DECREMENT':
      return --state;
    default:
      return state;
  }
}