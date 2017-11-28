import { user as Types } from '../types';
import { put, takeLatest } from 'redux-saga/effects';
import API from '../../services';
import url from '../../services/url';


//=== ACTION CREATOR ===
export const creatorActions = {
  //fetch
  userFetch() {
    return {
      type: Types.USER_FETCH,
    }
  },
  userFetchSuccess(data) {
    return {
      type: Types.USER_FETCH_SUCCESS,
      data
    }
  },
  userFetchFailure(error) {
    return {
      type: Types.USER_FETCH_FAILURE,
      error
    }
  },
  //save
  userSave() {
    return {
      type: Types.USER_SAVE,
    }
  },
  userSaveSuccess(data, editable) {
    return {
      type: Types.USER_SAVE_SUCCESS,
      data,
      editable
    }
  },
  userSaveFailure(error, editable) {
    return {
      type: Types.USER_SAVE_FAILURE,
      error,
      editable
    }
  },
  //delete
  userDelete() {
    return {
      type: Types.USER_DELETE,
    }
  },
  userDeleteSuccess(data, ID) {
    return {
      type: Types.USER_DELETE_SUCCESS,
      data,
      ID
    }
  },
  userDeleteFailure(error, ID) {
    return {
      type: Types.USER_DELETE_FAILURE,
      error,
      ID
    }
  }
}
// //=== SAGA MIDDLEWARE ===

function* fetchUser() {
  try {
    put(creatorActions.userFetch());
    const data = yield API.getData(url.user);
    yield put(creatorActions.userFetchSuccess(data));
  } catch (e) {
    yield put(creatorActions.userFetchFailure(e.message))
  }
}
function* saveUser(val) {
  try {
    let uri = val.editable ? url.user + '/' + val.params.ID : url.user;
    let method = val.editable ? 'PATCH' : 'POST';
    put(creatorActions.userSave());
    const data = yield API.pushData(method, uri, val.params);
    yield put(creatorActions.userSaveSuccess(method, data, val.editable));
  } catch (e) {
    yield put(creatorActions.userSaveFailure(e.message, val.editable))
  }
}
function* deleteUser(params) {
  try {
    put(creatorActions.userDelete());
    const data = yield API.deleteData(url.user + '/' + params.ID, params.ID);
    yield put(creatorActions.userDeleteSuccess(data, params.ID));
  } catch (e) {
    yield put(creatorActions.userDeleteFailure(e.message, params.ID))
  }
}

export const userSaga = [
  takeLatest(Types.USER_FETCH, fetchUser),
  takeLatest(Types.USER_SAVE, saveUser),
  takeLatest(Types.USER_DELETE, deleteUser)
];