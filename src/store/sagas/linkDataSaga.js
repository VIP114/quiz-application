/* eslint-disable prettier/prettier */
import { call, put } from 'redux-saga/effects'
import { linkDataapi } from 'src/services/api'
import { GET_LINKDATA_FAILURE, GET_LINKDATA_SUCCESS } from '../actions/actions'

export function* linkDataSaga(action) {
  try {
    const response = yield call(linkDataapi, action.payload)
    if (response) {
      yield put({
        type: GET_LINKDATA_SUCCESS,
        payload: response.data,
      })
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: GET_LINKDATA_FAILURE,
    })
  }
}
