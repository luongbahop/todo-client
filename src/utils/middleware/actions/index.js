import { all } from 'redux-saga/effects';
import {authSaga as auth} from './auth';
import {todoSaga as todo} from './todo';
// import * as user from './user';


export default function* actions() {
  yield all([
    ...todo,
    ...auth
    // fork(user),
  ]);
}