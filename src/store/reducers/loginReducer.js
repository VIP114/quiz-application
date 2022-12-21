import { LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from '../actions/actions'

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_BEGIN:
      return { ...state, loading: true }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      }
    case LOGIN_USER_ERROR:
      return { ...state, user: null, loading: false }
    default:
      return state
  }
}

export default loginReducer
