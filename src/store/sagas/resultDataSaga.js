/* eslint-disable prettier/prettier */
import { call, put } from 'redux-saga/effects'
import { resultDataapi } from 'src/services/api'
import { GET_RESULTDATA_FAILURE, GET_RESULTDATA_SUCCESS } from '../actions/actions'

export function* resultDataSaga(action) {
  try {
    const response = yield call(resultDataapi, action.payload)
    if (response) {
      yield put({
        type: GET_RESULTDATA_SUCCESS,
        payload: response.data,
      })
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: GET_RESULTDATA_FAILURE,
    })
  }
}
