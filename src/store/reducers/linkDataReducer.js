/* eslint-disable prettier/prettier */
import { GET_LINKDATA_BEGIN, GET_LINKDATA_FAILURE, GET_LINKDATA_SUCCESS } from '../actions/actions'

export const linkDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LINKDATA_BEGIN:
      return { ...state, loading: true }
    case GET_LINKDATA_SUCCESS:
      return {
        ...state,
        linkData: action.payload.data,
        loading: false,
      }
    case GET_LINKDATA_FAILURE:
      return { ...state, linkData: null, loading: false }
    default:
      return state
  }
}
