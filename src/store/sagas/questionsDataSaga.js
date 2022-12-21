import { put, call } from 'redux-saga/effects'
import {
  addQuestionsDataapi,
  deleteQuestionapi,
  editQuestionsapi,
  getQuestionsDataapi,
} from 'src/services/api'
import {
  ADD_QUESTIONS_FAILURE,
  ADD_QUESTIONS_SUCCESS,
  DELETE_QUESTIONS_BEGIN,
  DELETE_QUESTIONS_FAILURE,
  DELETE_QUESTIONS_SUCCESS,
  EDIT_QUESTIONS_FAILURE,
  EDIT_QUESTIONS_SUCCESS,
  GET_QUESTIONS_BEGIN,
  GET_QUESTIONS_FAILURE,
  GET_QUESTIONS_SUCCESS,
} from '../actions/actions'
import history from 'src/utils/history'

export function* addQuestions(action) {
  try {
    const response = yield call(addQuestionsDataapi, action.payload)
    if (response) {
      yield put({
        type: ADD_QUESTIONS_SUCCESS,
        payload: response.data,
      })
      history.push('/question')
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: ADD_QUESTIONS_FAILURE,
    })
  }
}

export function* getQuestionsData(action) {
  try {
    const response = yield call(getQuestionsDataapi, action.payload)
    if (response) {
      yield put({
        type: GET_QUESTIONS_SUCCESS,
        payload: response.data,
      })
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: GET_QUESTIONS_FAILURE,
    })
  }
}

export function* editQuestionsSaga(action) {
  try {
    const response = yield call(editQuestionsapi, action.payload)
    if (response) {
      yield put({
        type: EDIT_QUESTIONS_SUCCESS,
        payload: response.data,
      })
      history.push('/question')
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: EDIT_QUESTIONS_FAILURE,
    })
  }
}

export function* deleteQuestionSaga(action) {
  try {
    const response = yield call(deleteQuestionapi, action.payload)
    if (response) {
      yield put({
        type: DELETE_QUESTIONS_SUCCESS,
        payload: null,
      })
      yield put({
        type: GET_QUESTIONS_BEGIN,
        payload: null,
      })
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: DELETE_QUESTIONS_FAILURE,
    })
  }
}
