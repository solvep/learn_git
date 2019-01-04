import {createStore,combineReducers} from 'redux'
var reducer_0 = function(state = {},action){
  switch(action.type){
    case 'SAY_SOMETHING':
    return {
      ...state,
      message:action.value
    }
    default:
    return state
  }
}


var userRedcer = (state = {},action) =>{
  switch(action.type){
    default:
    state
  }
}
var reducer = combineReducers({
  user:userRedcer,
  reducer_0:reducer_0
});

var store = createStore(reducer);

export default reducer