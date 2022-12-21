import {
  ADD_QUESTIONS_BEGIN,
  ADD_QUESTIONS_FAILURE,
  ADD_QUESTIONS_SUCCESS,
  DELETE_QUESTIONS_BEGIN,
  DELETE_QUESTIONS_FAILURE,
  DELETE_QUESTIONS_SUCCESS,
  EDIT_QUESTIONS_BEGIN,
  EDIT_QUESTIONS_FAILURE,
  EDIT_QUESTIONS_SUCCESS,
  GET_QUESTIONS_BEGIN,
  GET_QUESTIONS_FAILURE,
  GET_QUESTIONS_SUCCESS,
} from '../actions/actions'

export const addQuestionsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUESTIONS_BEGIN:
      return { ...state, loading: true }
    case ADD_QUESTIONS_SUCCESS:
      return {
        ...state,
        questionsData: action.payload,
        loading: false,
      }
    case ADD_QUESTIONS_FAILURE:
      return { ...state, questionsData: null, loading: false }
    default:
      return state
  }
}

export const getQuestionsDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS_BEGIN:
      return { ...state, loading: true }
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        getQuestionsData: action.payload.data,
        loading: false,
      }
    case GET_QUESTIONS_FAILURE:
      return { ...state, getQuestionsData: null, loading: false }
    default:
      return state
  }
}

export const editQuestionsDataReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_QUESTIONS_BEGIN:
      return { ...state, loading: true }
    case EDIT_QUESTIONS_SUCCESS:
      return {
        ...state,
        editQuestionsData: action.payload,
        loading: false,
      }
    case EDIT_QUESTIONS_FAILURE:
      return { ...state, editQuestionsData: null, loading: false }
    default:
      return state
  }
}

export const deleteQuestionReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_QUESTIONS_BEGIN:
      return { ...state, loading: true }
    case DELETE_QUESTIONS_SUCCESS:
      return {
        ...state,
        deleteQuestion: state,
        loading: false,
      }
    case DELETE_QUESTIONS_FAILURE:
      return { ...state, deleteQuestion: null, loading: false }
    default:
      return state
  }
}
