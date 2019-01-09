import {REGISTER_USER} from '../action/user'
import Immutable from 'immutable'
const initalState = Immutable.fromJS({
  newUser:null,
  error:null,
  saveSuccess:false
})

export const users = (state = initalState,action={}) =>{
  switch(action.type){
    case REGISTER_USER:
      return state.merge({
        'newUser':action.datam,
        'saveSuccess':false,
        'error':null
      })
    default:
     return state
  }
}