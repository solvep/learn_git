import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

export default function configStore(){
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  );
  return store;
} 