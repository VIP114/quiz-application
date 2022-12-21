import {
  ADD_GENERATEEXAM_BEGIN,
  ADD_GENERATEEXAM_SUCCESS,
  ADD_GENERATEEXAM_FAILURE,
} from '../actions/actions'

export const generateExamReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_GENERATEEXAM_BEGIN:
      return { ...state, loading: true }
    case ADD_GENERATEEXAM_SUCCESS:
      return {
        ...state,
        generateExam: action.payload,
        loading: false,
      }
    case ADD_GENERATEEXAM_FAILURE:
      return { ...state, generateExam: null, loading: false }
    default:
      return state
  }
}
