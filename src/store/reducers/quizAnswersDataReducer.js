import { ADD_QUIZDATA_BEGIN, ADD_QUIZDATA_FAILURE, ADD_QUIZDATA_SUCCESS } from '../actions/actions'

export const addQuizAnswersReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUIZDATA_BEGIN:
      return { ...state, loading: true }
    case ADD_QUIZDATA_SUCCESS:
      return {
        ...state,
        addQuizAnswers: action.payload,
        loading: false,
      }
    case ADD_QUIZDATA_FAILURE:
      return { ...state, addQuizAnswers: null, loading: false }
    default:
      return state
  }
}
