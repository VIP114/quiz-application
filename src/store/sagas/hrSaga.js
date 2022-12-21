import { put, call } from 'redux-saga/effects'
import { addhrDataapi, deletehrDataapi, edithrDataapi, hrDataapi } from '../../services/api'
import history from '../../utils/history'

import {
  ADD_HR_FAILURE,
  ADD_HR_SUCCESS,
  DELETE_HR_FAILURE,
  DELETE_HR_SUCCESS,
  EDIT_HR_FAILURE,
  EDIT_HR_SUCCESS,
  GET_HR_BEGIN,
  GET_HR_FAILURE,
  GET_HR_SUCCESS,
} from '../actions/actions'

export function* hrData(action) {
  try {
    const response = yield call(hrDataapi, action.payload)
    if (response) {
      yield put({
        type: GET_HR_SUCCESS,
        payload: response.data,
      })
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: GET_HR_FAILURE,
    })
  }
}

export function* addHrDataSaga(action) {
  try {
    const response = yield call(addhrDataapi, action.payload)
    if (response) {
      yield put({
        type: ADD_HR_SUCCESS,
        payload: response.data,
      })
      history.push('/hr')
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: ADD_HR_FAILURE,
    })
  }
}

export function* editHrDataSaga(action) {
  try {
    const response = yield call(edithrDataapi, action.payload)
    if (response) {
      yield put({
        type: EDIT_HR_SUCCESS,
        payload: response.data,
      })
      history.push('/hr')
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: EDIT_HR_FAILURE,
    })
  }
}

export function* deleteHrDataSaga(action) {
  try {
    const response = yield call(deletehrDataapi, action.payload)
    if (response) {
      yield put({
        type: DELETE_HR_SUCCESS,
        payload: null,
      })
      yield put({
        type: GET_HR_BEGIN,
      })
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: DELETE_HR_FAILURE,
    })
  }
}
