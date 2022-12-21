/* eslint-disable prettier/prettier */
import {
  EDIT_USER_BEGIN,
  EDIT_USER_FAILURE,
  EDIT_USER_SUCCESS,
  GET_USERDATA_BEGIN,
  GET_USERDATA_FAILURE,
  GET_USERDATA_SUCCESS,
} from '../actions/actions'

export const editUserReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_USER_BEGIN:
      return { ...state, loading: true }
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        editUserData: action.payload,
        loading: false,
      }
    case EDIT_USER_FAILURE:
      return { ...state, editUserData: null, loading: false }
    default:
      return state
  }
}

export const getUserDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERDATA_BEGIN:
      return { ...state, loading: true }
    case GET_USERDATA_SUCCESS:
      return {
        ...state,
        userData: action.payload.data,
        loading: false,
      }
    case GET_USERDATA_FAILURE:
      return { ...state, userData: null, loading: false }
    default:
      return state
  }
}
