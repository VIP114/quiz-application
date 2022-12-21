import { put, call } from 'redux-saga/effects'
import { ADD_QUIZDATA_FAILURE, ADD_QUIZDATA_SUCCESS } from '../actions/actions'
import history from '../../utils/history'
import { addQuizAnswersapi } from 'src/services/api'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

export function* addQuizAnswersSaga(action) {
  try {
    const response = yield call(addQuizAnswersapi, action.payload)
    if (response) {
      yield put({
        type: ADD_QUIZDATA_SUCCESS,
        payload: response.data,
      })
      if (response.status === 200) {
        const notify = (message) => toast(message)
        notify('Quiz Successfully Submitted, you can EXIT now')
        // alert('Quiz completed, you can EXIT now')
      }
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: ADD_QUIZDATA_FAILURE,
    })
  }
}
