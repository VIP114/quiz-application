import { put, call } from 'redux-saga/effects'
import {
  GET_COMPANYDATA_SUCCESS,
  GET_COMPANYDATA_FAILURE,
  ADD_COMPANYDATA_SUCCESS,
  ADD_COMPANYDATA_FAILURE,
  DELETE_COMPANYDATA_FAILURE,
  DELETE_COMPANYDATA_SUCCESS,
  EDIT_COMPANYDATA_SUCCESS,
  EDIT_COMPANYDATA_FAILURE,
  GET_COMPANYDATA_BEGIN,
} from '../actions/actions'
import {
  companyDataapi,
  addCompanyDataapi,
  editCompanyDataapi,
  deleteCompanyDataapi,
} from '../../services/api'
import history from '../../utils/history'

export function* companyData(action) {
  try {
    const response = yield call(companyDataapi, action.payload)
    if (response) {
      yield put({
        type: GET_COMPANYDATA_SUCCESS,
        payload: response.data,
      })
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: GET_COMPANYDATA_FAILURE,
    })
  }
}

export function* addCompanyData(action) {
  try {
    const response = yield call(addCompanyDataapi, action.payload)
    if (response) {
      yield put({
        type: ADD_COMPANYDATA_SUCCESS,
        payload: response.data,
      })
      history.push('/company')
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: ADD_COMPANYDATA_FAILURE,
    })
  }
}

export function* editCompanyDataSaga(action) {
  try {
    const response = yield call(editCompanyDataapi, action.payload)
    if (response) {
      yield put({
        type: EDIT_COMPANYDATA_SUCCESS,
        payload: response.data,
      })
      history.push('/company')
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: EDIT_COMPANYDATA_FAILURE,
    })
  }
}

export function* deleteCompanyDataSaga(action) {
  try {
    const response = yield call(deleteCompanyDataapi, action.payload)
    if (response) {
      yield put({
        type: DELETE_COMPANYDATA_SUCCESS,
        payload: null,
      })
      yield put({
        type: GET_COMPANYDATA_BEGIN,
        payload: null,
      })
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: DELETE_COMPANYDATA_FAILURE,
    })
  }
}
