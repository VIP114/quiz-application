import axios from 'axios'
const BASE_URL = 'https://quiz-backend-dqsi.onrender.com/'
// const BASE_URL = 'http://localhost:4000/'

const getToken = () => {
  return window.localStorage.getItem('userToken') || ''
}

const handleError = (error) => {
  if (error.response.status === 400) {
    alert(error.response.data.message)
    console.error(error)
  } else if (error.response.status > 400) {
    alert(error.response.data.message)
    console.error(error)
  }
  return false
}

export const ApiRequest = async (config) => {
  const token = getToken()
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  const newConfig = {
    baseURL: BASE_URL,
    headers,
    ...config,
  }
  return axios(newConfig)
    .then((res) => {
      return res
    })
    .catch(handleError)
}
