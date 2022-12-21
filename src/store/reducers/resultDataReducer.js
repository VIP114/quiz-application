/* eslint-disable prettier/prettier */
import {
  GET_RESULTDATA_BEGIN,
  GET_RESULTDATA_FAILURE,
  GET_RESULTDATA_SUCCESS,
} from '../actions/actions'

export const resultDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_RESULTDATA_BEGIN:
      return { ...state, loading: true }
    case GET_RESULTDATA_SUCCESS:
      return {
        ...state,
        resultData: action.payload.data,
        loading: false,
      }
    case GET_RESULTDATA_FAILURE:
      return { ...state, resultData: null, loading: false }
    default:
      return state
  }
}
