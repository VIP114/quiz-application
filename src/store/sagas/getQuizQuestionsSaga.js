import { put, call } from 'redux-saga/effects'
import { GET_QUIZQUESTIONS_SUCCESS, GET_QUIZQUESTIONS_FAILURE } from '../actions/actions'
import { getQuizQuestions } from '../../services/api'

export function* quizQuestionsSaga(action) {
  try {
    const response = yield call(getQuizQuestions, action.payload)

    if (response) {
      yield put({
        type: GET_QUIZQUESTIONS_SUCCESS,
        payload: response.data.data,
      })
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: GET_QUIZQUESTIONS_FAILURE,
    })
  }
}
