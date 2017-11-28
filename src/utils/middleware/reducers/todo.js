import { todo as Types } from '../types';

const initialState = {
  action: undefined,
  data: [],
  isFetch: false,
  save: {
    editable: false,
    result: '',
    data: {}
  },
  isSave: false,
  delete: {
    ID: null,
    data: {}
  },
  isDelete: false,
  error: false
}
export default function todoReducer(state = initialState, action) {
  state.action = action.type;
  switch (action.type) {
    //FETCH=================================>
    case Types.TODO_FETCH: {
      return Object.assign({}, state, {
        isFetch: true
      })
    }
    case Types.TODO_FETCH_SUCCESS: {
      return Object.assign({}, state, {
        isFetch: false,
        data: action.data
      })
    }
    case Types.TODO_FETCH_FAILURE: {
      return Object.assign({}, state, {
        isFetch: false,
        error: action.error
      })
    }
    //SAVE=================================>
    case Types.TODO_SAVE: {
      return Object.assign({}, state, {
        isSave: true
      })
    }
    case Types.TODO_SAVE_SUCCESS: {
      return Object.assign({}, state, {
        isSave: false,
        save: {
          data: action.data,
          editable: action.editable,
          result: 'success'
        }
      })
    }
    case Types.TODO_SAVE_FAILURE: {
      return Object.assign({}, state, {
        isSave: false,
        save: {
          data: [],
          editable: action.editable,
          result: 'fail'
        },
        error: action.error
      })
    }
    //DELETE=================================>
    case Types.TODO_DELETE: {
      return Object.assign({}, state, {
        isDelete: true
      })
    }
    case Types.TODO_DELETE_SUCCESS: {
      return Object.assign({}, state, {
        isDelete: false,
        delete: {
          ID: action.ID,
        }
      })
    }
    case Types.TODO_DELETE_FAILURE: {
      return Object.assign({}, state, {
        isDelete: false,
        delete: {
          data: [],
          ID: action.ID,
        },
        error: action.error
      })
    }
    default: return state
  }
} 