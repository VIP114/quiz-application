import {
  GET_QUIZQUESTIONS_BEGIN,
  GET_QUIZQUESTIONS_SUCCESS,
  GET_QUIZQUESTIONS_FAILURE,
} from '../actions/actions'

export const quizQuestionsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_QUIZQUESTIONS_BEGIN:
      return { ...state, loading: true }
    case GET_QUIZQUESTIONS_SUCCESS:
      return {
        ...state,
        quizQuestionsData: action.payload,
        loading: false,
      }
    case GET_QUIZQUESTIONS_FAILURE:
      return { ...state, quizQuestionsData: null, loading: false }
    default:
      return state
  }
}
