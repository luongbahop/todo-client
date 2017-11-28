import { takeLatest } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';
import API from '../../../services';
import url from '../../../services/url';
import { creatorActions as actions, todoSaga as sagas, fetchTodo, saveTodo, deleteTodo } from '../todo'
import { todo as types } from '../../types'

describe('Todo actions', () => {
  //FETCH
  it('should create an action to fetch list todo', () => {
    const expectedAction = {
      type: types.TODO_FETCH,
    }
    expect(actions.todoFetch()).toEqual(expectedAction)
  });
  it('should create an action to fetch success list todo', () => {
    const data = {
      data: [],
      total: 0,
      limit: 10
    };
    const expectedAction = {
      type: types.TODO_FETCH_SUCCESS,
      data
    }
    expect(actions.todoFetchSuccess(data)).toEqual(expectedAction)
  })
  it('should create an action to fetch failure list todo', () => {
    const error = {
      message: 'Err!, Not found database'
    };
    const expectedAction = {
      type: types.TODO_FETCH_FAILURE,
      error
    }
    expect(actions.todoFetchFailure(error)).toEqual(expectedAction)
  });
  it('should create an action to saga fetch list todo', () => {
    const uri = url.todo;
    const action = {
      type: types.TODO_FETCH,
      url: uri
    };
    const data = {
      data: [],
      limit: 10,
      total: 0
    }
    const iterator = fetchTodo(action);
    iterator.next();
    expect(iterator.next(data).value).toEqual(put(actions.todoFetchSuccess(data)));
  });

  //SAVE
  it('should create an action to save todo', () => {
    const expectedAction = {
      type: types.TODO_SAVE,
    }
    expect(actions.todoSave()).toEqual(expectedAction)
  });
  it('should create an action to save success todo', () => {
    const data = {
      title: 'todo one',
      description: 'I have to '
    };
    const editable = false;
    const expectedAction = {
      type: types.TODO_SAVE_SUCCESS,
      data,
      editable
    }
    expect(actions.todoSaveSuccess(data, editable)).toEqual(expectedAction)
  })
  it('should create an action to save failure todo', () => {
    const error = {
      message: 'Err!, Not found database'
    };
    const editable = false;
    const expectedAction = {
      type: types.TODO_SAVE_FAILURE,
      error,
      editable
    }
    expect(actions.todoSaveFailure(error, editable)).toEqual(expectedAction)
  });
  it('should create an action to saga save todo', () => {
    const uri = url.todo;
    const method = 'POST';
    const editable = false;
    const action = {
      type: types.TODO_SAVE,
      method,
      editable,
      url: uri
    };
    const data = {
      title: "title 1",
      description: "description"
    }
    const iterator = saveTodo(action);
    iterator.next();
    expect(iterator.next(data).value).toEqual(put(actions.todoSaveSuccess(method, data, editable)));
  });

  //DELETE
  it('should create an action to delete todo', () => {
    const expectedAction = {
      type: types.TODO_DELETE,
    }
    expect(actions.todoDelete()).toEqual(expectedAction)
  });
  it('should create an action to delete success todo', () => {
    const ID = '10099a';
    const data = {
      title: 'todo one',
      description: 'I have to '
    };
    const expectedAction = {
      type: types.TODO_DELETE_SUCCESS,
      data,
      ID
    }
    expect(actions.todoDeleteSuccess(data, ID)).toEqual(expectedAction)
  })
  it('should create an action to delete failure todo', () => {
    const error = {
      message: 'Err!, Not found database'
    };
    const ID = '10099a';
    const expectedAction = {
      type: types.TODO_DELETE_FAILURE,
      error,
      ID
    }
    expect(actions.todoDeleteFailure(error, ID)).toEqual(expectedAction)
  });
  it('should create an action to saga delete todo', () => {
    const uri = url.todo;
    const ID = 'a1990';
    const editable = false;
    const action = {
      type: types.TODO_DELETE,
      ID,
      url: uri
    };
    const data = {
      title: "title 1",
      description: "description"
    }
    const iterator = deleteTodo(action);
    iterator.next();
    expect(iterator.next(data).value).toEqual(put(actions.todoDeleteSuccess( data, ID)));
  });

})