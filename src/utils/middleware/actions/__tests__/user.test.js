import { creatorActions as actions } from '../user'
import { user as types } from '../../types'

describe('User actions', () => {
  //FETCH
  it('should create an action to fetch list user', () => {
    const expectedAction = {
      type: types.USER_FETCH,
    }
    expect(actions.userFetch()).toEqual(expectedAction)
  });
  it('should create an action to fetch success list user', () => {
    const data = {
      data: [],
      total: 0,
      limit: 10
    };
    const expectedAction = {
      type: types.USER_FETCH_SUCCESS,
      data
    }
    expect(actions.userFetchSuccess(data)).toEqual(expectedAction)
  })
  it('should create an action to fetch failure list user', () => {
    const error = {
      message: 'Err!, Not found database'
    };
    const expectedAction = {
      type: types.USER_FETCH_FAILURE,
      error
    }
    expect(actions.userFetchFailure(error)).toEqual(expectedAction)
  });

  //SAVE
  it('should create an action to save user', () => {
    const expectedAction = {
      type: types.USER_SAVE,
    }
    expect(actions.userSave()).toEqual(expectedAction)
  });
  it('should create an action to save success user', () => {
    const data = {
      username: 'admin',
      password: '1234'
    };
    const editable = false;
    const expectedAction = {
      type: types.USER_SAVE_SUCCESS,
      data,
      editable
    }
    expect(actions.userSaveSuccess(data, editable)).toEqual(expectedAction)
  })
  it('should create an action to save failure user', () => {
    const error = {
      message: 'Err!, Not found database'
    };
    const editable = false;
    const expectedAction = {
      type: types.USER_SAVE_FAILURE,
      error,
      editable
    }
    expect(actions.userSaveFailure(error, editable)).toEqual(expectedAction)
  });
  
  //DELETE
  it('should create an action to delete user', () => {
    const expectedAction = {
      type: types.USER_DELETE,
    }
    expect(actions.userDelete()).toEqual(expectedAction)
  });
  it('should create an action to delete success user', () => {
    const ID = '10099a';
    const data = {
      username: 'admin',
      password: '1234'
    };
    const expectedAction = {
      type: types.USER_DELETE_SUCCESS,
      data,
      ID
    }
    expect(actions.userDeleteSuccess(data, ID)).toEqual(expectedAction)
  })
  it('should create an action to delete failure user', () => {
    const error = {
      message: 'Err!, Not found database'
    };
    const ID = '10099a';
    const expectedAction = {
      type: types.USER_DELETE_FAILURE,
      error,
      ID
    }
    expect(actions.userDeleteFailure(error, ID)).toEqual(expectedAction)
  });

})