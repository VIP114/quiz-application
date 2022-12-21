/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
// import { combineReducers } from 'redux'

const initialState = {
  role: '',
  sidebarShow: true,
  isSignedIn: false,
  sidebarUnfoldable: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {
        ...state,
        ...rest,
      }
    case 'ADMIN':
      return { ...state.admin, ...rest }
    default:
      return state
  }
}

export default changeState
