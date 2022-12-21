import { put, call } from 'redux-saga/effects'
import { ADD_GENERATEEXAM_SUCCESS, ADD_GENERATEEXAM_FAILURE } from '../actions/actions'
import { generateExamApi } from '../../services/api'
import history from '../../utils/history'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

export function* generateExam(action) {
  try {
    const response = yield call(generateExamApi, action.payload)
    if (response) {
      yield put({
        type: ADD_GENERATEEXAM_SUCCESS,
        payload: response.data,
      })
      if (response.status === 200) {
        const notify = (message) => toast(message)
        notify('Exam Generated Successfully')
        history.push('/dashboard')
      }
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: ADD_GENERATEEXAM_FAILURE,
    })
  }
}
