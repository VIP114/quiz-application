import { put, call } from 'redux-saga/effects'
import {
  ADD_EXAMTYPE_SUCCESS,
  ADD_EXAMTYPE_FAILURE,
  GET_EXAMTYPE_SUCCESS,
  GET_EXAMTYPE_FAILURE,
  EDIT_EXAMTYPE_SUCCESS,
  EDIT_EXAMTYPE_FAILURE,
  DELETE_EXAMTYPE_SUCCESS,
  DELETE_EXAMTYPE_FAILURE,
  GET_EXAMTYPE_BEGIN,
} from '../actions/actions'
import {
  addExamDataapi,
  deleteExamDataapi,
  editExamTypeapi,
  getExamTypeDataapi,
} from '../../services/api'
import history from '../../utils/history'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

export function* addExamType(action) {
  try {
    const response = yield call(addExamDataapi, action.payload)
    if (response) {
      yield put({
        type: ADD_EXAMTYPE_SUCCESS,
        payload: response.data,
      })
      const notify = (message) => toast(message)
      notify('ExamType Added Successfully')
      history.push('/examtype')
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: ADD_EXAMTYPE_FAILURE,
    })
  }
}

export function* getExamTypeData(action) {
  try {
    const response = yield call(getExamTypeDataapi, action.payload)
    if (response) {
      yield put({
        type: GET_EXAMTYPE_SUCCESS,
        payload: response.data,
      })
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: GET_EXAMTYPE_FAILURE,
    })
  }
}

export function* editExamTypeData(action) {
  try {
    const response = yield call(editExamTypeapi, action.payload)
    if (response) {
      yield put({
        type: EDIT_EXAMTYPE_SUCCESS,
        payload: response.data,
      })
      history.push('/examtype')
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: EDIT_EXAMTYPE_FAILURE,
    })
  }
}

export function* deleteExamData(action) {
  try {
    const response = yield call(deleteExamDataapi, action.payload)
    if (response) {
      yield put({
        type: DELETE_EXAMTYPE_SUCCESS,
        payload: null,
      })
      yield put({
        type: GET_EXAMTYPE_BEGIN,
        payload: null,
      })
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: DELETE_EXAMTYPE_FAILURE,
    })
  }
}
