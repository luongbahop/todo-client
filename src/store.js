import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

const { reducers, actions } = global.UTILS;
const sagaMiddleware = createSagaMiddleware();
class store {
  constructor() {
    const store = createStore(combineReducers({ ...reducers }), applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(actions);
    return store;
  }
}
export default new store();