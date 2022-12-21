/* eslint-disable prettier/prettier */
import { put, call } from 'redux-saga/effects'
import { editUserapi, getUserDataapi } from 'src/services/api'
import history from 'src/utils/history'
import {
  EDIT_USER_FAILURE,
  EDIT_USER_SUCCESS,
  GET_USERDATA_FAILURE,
  GET_USERDATA_SUCCESS,
} from '../actions/actions'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

export function* editUserSaga(action) {
  try {
    const response = yield call(editUserapi, action.payload)
    if (response) {
      yield put({
        type: EDIT_USER_SUCCESS,
        payload: response.data,
      })
      if (response.status === 200) {
        const notify = (message) => toast(message)
        notify('Details updated Successfully')
        // history.push('/dashboard')
      } // history.push('/dashboard')
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: EDIT_USER_FAILURE,
    })
  }
}

export function* getUserDataSaga(action) {
  try {
    const response = yield call(getUserDataapi, action.payload)
    if (response) {
      yield put({
        type: GET_USERDATA_SUCCESS,
        payload: response.data,
      })
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: GET_USERDATA_FAILURE,
    })
  }
}
