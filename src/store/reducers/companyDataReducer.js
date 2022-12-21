import {
  GET_COMPANYDATA_BEGIN,
  GET_COMPANYDATA_SUCCESS,
  GET_COMPANYDATA_FAILURE,
  ADD_COMPANYDATA_BEGIN,
  ADD_COMPANYDATA_SUCCESS,
  ADD_COMPANYDATA_FAILURE,
  EDIT_COMPANYDATA_BEGIN,
  EDIT_COMPANYDATA_SUCCESS,
  EDIT_COMPANYDATA_FAILURE,
  DELETE_COMPANYDATA_BEGIN,
  DELETE_COMPANYDATA_FAILURE,
  DELETE_COMPANYDATA_SUCCESS,
} from '../actions/actions'

export const CompanyDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COMPANYDATA_BEGIN:
      return { ...state, loading: true }
    case GET_COMPANYDATA_SUCCESS:
      return {
        ...state,
        companyData: action.payload.data,
        loading: false,
      }
    case GET_COMPANYDATA_FAILURE:
      return { ...state, companyData: null, loading: false }
    default:
      return state
  }
}

export const addcompanyDataReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMPANYDATA_BEGIN:
      return { ...state, loading: true }
    case ADD_COMPANYDATA_SUCCESS:
      return {
        ...state,
        addcompanyData: action.payload,
        loading: false,
      }
    case ADD_COMPANYDATA_FAILURE:
      return { ...state, addcompanyData: null, loading: false }
    default:
      return state
  }
}

export const editCompanyDataReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_COMPANYDATA_BEGIN:
      return { ...state, loading: true }
    case EDIT_COMPANYDATA_SUCCESS:
      return {
        ...state,
        editCompanyData: action.payload,
        loading: false,
      }
    case EDIT_COMPANYDATA_FAILURE:
      return { ...state, editCompanyData: null, loading: false }
    default:
      return state
  }
}

export const deleteCompanyDataReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_COMPANYDATA_BEGIN:
      return { ...state, loading: true }
    case DELETE_COMPANYDATA_SUCCESS:
      return {
        ...state,
        companyData: null,
        loading: false,
      }
    case DELETE_COMPANYDATA_FAILURE:
      return { ...state, companyData: null, loading: false }
    default:
      return state
  }
}
