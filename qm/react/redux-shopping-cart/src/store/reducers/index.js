import { combineReducers } from 'redux';
import productReducer from './productReducer';
import floatCarReducer from './floatCarReducer';
import updateCartReducer from './updateCartReducer';

//没有标准 只有最好的实践推进
// redux 状态设计 根据你的ui你的设计来写你需要共享哪些状态 
export default combineReducers({
  products: productReducer,
  cartProducts: floatCarReducer,
  cartTotal: updateCartReducer,
  // sort: sortReducer,
  // filters:filterReducer,
})