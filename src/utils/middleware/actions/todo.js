import { todo as Types } from '../types';
import { put, takeLatest } from 'redux-saga/effects';
import API from '../../services';
import url from '../../services/url';


//=== ACTION CREATOR ===
export const creatorActions = {
  //fetch
  todoFetch() {
    return {
      type: Types.TODO_FETCH,
    }
  },
  todoFetchSuccess(data) {
    return {
      type: Types.TODO_FETCH_SUCCESS,
      data
    }
  },
  todoFetchFailure(error) {
    return {
      type: Types.TODO_FETCH_FAILURE,
      error
    }
  },
  //save
  todoSave() {
    return {
      type: Types.TODO_SAVE,
    }
  },
  todoSaveSuccess(data, editable) {
    return {
      type: Types.TODO_SAVE_SUCCESS,
      data,
      editable
    }
  },
  todoSaveFailure(error, editable) {
    return {
      type: Types.TODO_SAVE_FAILURE,
      error,
      editable
    }
  },
  //delete
  todoDelete() {
    return {
      type: Types.TODO_DELETE,
    }
  },
  todoDeleteSuccess(data, ID) {
    return {
      type: Types.TODO_DELETE_SUCCESS,
      data,
      ID
    }
  },
  todoDeleteFailure(error, ID) {
    return {
      type: Types.TODO_DELETE_FAILURE,
      error,
      ID
    }
  }
}
// //=== SAGA MIDDLEWARE ===

export function* fetchTodo() {
  try {
    put(creatorActions.todoFetch());
    const data = yield API.getData(url.todo); // next 1
    yield put(creatorActions.todoFetchSuccess(data));// next 2 (data)
  } catch (e) {
    yield put(creatorActions.todoFetchFailure(e.message))
  }
}
export function* saveTodo(val) {
  try {
    let uri = val.editable ? url.todo + '/' + val.params.ID : url.todo;
    let method = val.editable ? 'PATCH' : 'POST';
    put(creatorActions.todoSave());
    const data = yield API.pushData(method, uri, val.params);
    yield put(creatorActions.todoSaveSuccess(method, data, val.editable));
  } catch (e) {
    yield put(creatorActions.todoSaveFailure(e.message, val.editable))
  }
}
export function* deleteTodo(params) {
  try {
    put(creatorActions.todoDelete());
    const data = yield API.deleteData(url.todo + '/' + params.ID, params.ID);
    yield put(creatorActions.todoDeleteSuccess(data, params.ID));
  } catch (e) {
    yield put(creatorActions.todoDeleteFailure(e.message, params.ID))
  }
}

export const todoSaga = [
  takeLatest(Types.TODO_FETCH, fetchTodo),
  takeLatest(Types.TODO_SAVE, saveTodo),
  takeLatest(Types.TODO_DELETE, deleteTodo)
];