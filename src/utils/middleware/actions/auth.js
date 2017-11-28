import { auth as Types } from '../types';
import { put, takeLatest } from 'redux-saga/effects';
import API from '../../services';
import url from '../../services/url';


//=== ACTION CREATOR ===
export const creatorActions = {
  //login
  authLogin() {
    return {
      type: Types.AUTH_LOGIN,
    }
  },
  authLoginSuccess(data) {
    return {
      type: Types.AUTH_LOGIN_SUCCESS,
      data
    }
  },
  authLoginFailure(error) {
    return {
      type: Types.AUTH_LOGIN_FAILURE,
      error
    }
  },
   //logout
   authLogout() {
    return {
      type: Types.AUTH_LOGOUT,
    }
  },
}
// //=== SAGA MIDDLEWARE ===

export function* login(val) {
  try {
    put(creatorActions.authLogin());
    let uri = url.auth;
    let method = 'POST';
    let result = yield API.pushData(
      method,
      uri,
      val.params,
      success => creatorActions.authLoginSuccess(success),
      error => creatorActions.authLoginFailure(error),
    );
    localStorage.setItem('authentication', JSON.stringify(result.data));
    yield put(result);
  } catch (e) {
    yield put(creatorActions.authLoginFailure(e.message))
  }
}

export function logout(){
  localStorage.removeItem('authentication');
  put(creatorActions.authLogout());
}


export const authSaga = [
  takeLatest(Types.AUTH_LOGIN, login),
  takeLatest(Types.AUTH_LOGOUT, logout),
];