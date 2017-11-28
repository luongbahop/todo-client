import { auth as Types } from '../types';

const initialState = {
  action: undefined,
  info: {},
  isLogin: false,
  token: null,
  isLogged: false,
  error: false,
  remember: false
}
export default function todoReducer(state = initialState, action) {
  state.action = action.type;
  switch (action.type) {
    //LOGIN=================================>
    case Types.AUTH_LOGIN: {
      return Object.assign({}, state, {
        isLogin: true
      })
    }
    case Types.AUTH_LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        isLogin: false,
        isLogged: true,
        token: action.data.token,
        info: action.data.user
      })
    }
    case Types.AUTH_LOGIN_FAILURE: {
      return Object.assign({}, state, {
        isLogin: false,
        info: {},
        error: action.error
      })
    }
    //LOGOUT=================================>
    case Types.AUTH_LOGOUT: {
      return Object.assign({}, state, {
        isLogin: false,
        isLogged: false,
        token: null,
        info: {},
        remember: false
      })
    }

    default: return state
  }
} 