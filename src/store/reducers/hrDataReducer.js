import {
  ADD_HR_BEGIN,
  ADD_HR_FAILURE,
  ADD_HR_SUCCESS,
  DELETE_HR_BEGIN,
  DELETE_HR_FAILURE,
  DELETE_HR_SUCCESS,
  EDIT_HR_BEGIN,
  EDIT_HR_FAILURE,
  EDIT_HR_SUCCESS,
  GET_HR_BEGIN,
  GET_HR_FAILURE,
  GET_HR_SUCCESS,
} from '../actions/actions'

export const hrDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_HR_BEGIN:
      return { ...state, loading: true }
    case GET_HR_SUCCESS:
      return {
        ...state,
        hrData: action.payload.data,
        loading: false,
      }
    case GET_HR_FAILURE:
      return { ...state, hrData: null, loading: false }
    default:
      return state
  }
}

export const addhrDataReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_HR_BEGIN:
      return { ...state, loading: true }
    case ADD_HR_SUCCESS:
      return {
        ...state,
        addHrData: action.payload,
        loading: false,
      }
    case ADD_HR_FAILURE:
      return { ...state, addHrData: null, loading: false }
    default:
      return state
  }
}

export const edithrDataReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_HR_BEGIN:
      return { ...state, loading: true }
    case EDIT_HR_SUCCESS:
      return {
        ...state,
        editHrData: action.payload,
        loading: false,
      }
    case EDIT_HR_FAILURE:
      return { ...state, editHrData: null, loading: false }
    default:
      return state
  }
}

export const deletehrDataReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_HR_BEGIN:
      return { ...state, loading: true }
    case DELETE_HR_SUCCESS:
      return {
        ...state,
        hrData: null,
        loading: false,
      }
    case DELETE_HR_FAILURE:
      return { ...state, hrData: null, loading: false }
    default:
      return state
  }
}
