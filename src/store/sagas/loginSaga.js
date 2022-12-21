import { put, call } from 'redux-saga/effects'
import history from 'src/utils/history'
import { loginUser } from '../../services/api'
import { LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } from '../actions/actions'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

export function* Login(action) {
  try {
    const response = yield call(loginUser, action.payload)
    if (response) {
      yield put({
        type: LOGIN_USER_SUCCESS,
        payload: response.data,
      })
      yield window.localStorage.setItem('userToken', response.data.data?.token)
      yield window.localStorage.setItem('role', response.data.data?.role)

      yield window.localStorage.setItem('name', response.data.data?.name)
      yield window.localStorage.setItem('email', response.data.data?.email)
      yield window.localStorage.setItem('address', response.data.data?.address)
      yield window.localStorage.setItem('phone', response.data.data?.phone)
      yield window.localStorage.setItem('image', response.data.data?.image.fileUrl)
      yield window.localStorage.setItem('companyName', response.data.data.companyId?.companyName)
      yield window.localStorage.setItem('companyEmail', response.data.data.companyId?.companyEmail)
      yield window.localStorage.setItem(
        'companyAddress',
        response.data.data.companyId?.companyAddress,
      )
      yield window.localStorage.setItem(
        'companyWebsite',
        response.data.data.companyId?.companyWebsite,
      )
      yield window.localStorage.setItem('companyPhone', response.data.data.companyId?.companyPhone)

      if (response.status === 200) {
        const notify = (message) => toast(message)
        notify('Login Successful')
        history.push('/dashboard')
      }
    } else {
      throw response
    }
  } catch (error) {
    yield put({
      type: LOGIN_USER_ERROR,
    })
  }
}
