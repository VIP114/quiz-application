import {
  ADD_EXAMTYPE_BEGIN,
  ADD_EXAMTYPE_SUCCESS,
  ADD_EXAMTYPE_FAILURE,
  GET_EXAMTYPE_BEGIN,
  GET_EXAMTYPE_SUCCESS,
  GET_EXAMTYPE_FAILURE,
  EDIT_EXAMTYPE_BEGIN,
  EDIT_EXAMTYPE_SUCCESS,
  EDIT_EXAMTYPE_FAILURE,
  DELETE_EXAMTYPE_BEGIN,
  DELETE_EXAMTYPE_FAILURE,
  DELETE_EXAMTYPE_SUCCESS,
} from '../actions/actions'

export const addExamTypeReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_EXAMTYPE_BEGIN:
      return { ...state, loading: true }
    case ADD_EXAMTYPE_SUCCESS:
      return {
        ...state,
        addExamType: action.payload,
        loading: false,
      }
    case ADD_EXAMTYPE_FAILURE:
      return { ...state, addExamType: null, loading: false }
    default:
      return state
  }
}

export const getExamTypeDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_EXAMTYPE_BEGIN:
      return { ...state, loading: true }
    case GET_EXAMTYPE_SUCCESS:
      return {
        ...state,
        examTypeData: action.payload.data,
        loading: false,
      }
    case GET_EXAMTYPE_FAILURE:
      return { ...state, examTypeData: null, loading: false }
    default:
      return state
  }
}

export const editExamTypeDataReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_EXAMTYPE_BEGIN:
      return { ...state, loading: true }
    case EDIT_EXAMTYPE_SUCCESS:
      return {
        ...state,
        editExamType: action.payload,
        loading: false,
      }
    case EDIT_EXAMTYPE_FAILURE:
      return { ...state, editExamType: null, loading: false }
    default:
      return state
  }
}

export const deleteExamDataReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_EXAMTYPE_BEGIN:
      return { ...state, loading: true }
    case DELETE_EXAMTYPE_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case DELETE_EXAMTYPE_FAILURE:
      return { ...state, deleteExamData: null, loading: false }
    default:
      return state
  }
}
