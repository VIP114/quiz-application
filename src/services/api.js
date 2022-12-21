import { ApiRequest } from './request'

export const loginUser = async (data) => {
  const config = {
    url: '/api/user/login',
    method: 'POST',
    data: data,
  }
  const result = await ApiRequest(config)
  return result
}

export const companyDataapi = async (id) => {
  const config = {
    url: `/api/user/company/list`,
    method: 'GET',
  }
  const result = await ApiRequest(config)
  return result
}

export const addCompanyDataapi = async (data) => {
  const config = {
    url: '/api/user/company',
    method: 'POST',
    enctype: 'multipart/form-data',
    data: data,
  }
  const result = await ApiRequest(config)
  return result
}

export const editCompanyDataapi = async (data) => {
  const config = {
    url: '/api/user/company/edit',
    method: 'PUT',
    enctype: 'multipart/form-data',
    data: data,
  }
  const result = await ApiRequest(config)
  return result
}

export const deleteCompanyDataapi = async (companyId) => {
  const config = {
    url: `/api/user/company/delete`,
    method: 'DELETE',
    data: companyId,
  }
  const result = await ApiRequest(config)
  return result
}

export const hrDataapi = async (id) => {
  const config = {
    url: `/api/user/company/list`,
    method: 'GET',
  }
  const result = await ApiRequest(config)
  return result
}

export const addhrDataapi = async (data) => {
  const config = {
    url: '/api/user/company',
    method: 'POST',
    enctype: 'multipart/form-data',
    data: data,
  }
  const result = await ApiRequest(config)
  return result
}

export const edithrDataapi = async (data) => {
  const config = {
    url: '/api/user/company/edit',
    method: 'PUT',
    enctype: 'multipart/form-data',
    data: data,
  }
  const result = await ApiRequest(config)
  return result
}

export const deletehrDataapi = async (id) => {
  const config = {
    url: `/api/user/hr/delete`,
    method: 'DELETE',
    data: id,
  }
  const result = await ApiRequest(config)
  return result
}

export const addExamDataapi = async (data) => {
  const config = {
    url: '/api/exam/add',
    method: 'POST',
    data: data,
  }
  const result = await ApiRequest(config)
  return result
}

export const getExamTypeDataapi = async (id) => {
  const x = 5 * id
  const config = {
    url: `/api/exam/list`,
    method: 'GET',
  }
  const result = await ApiRequest(config)
  return result
}

export const editExamTypeapi = async (datas) => {
  const data = { ...datas }

  const config = {
    url: '/api/exam/edit',
    method: 'POST',
    data: data,
  }
  const result = await ApiRequest(config)
  return result
}

export const addQuestionsDataapi = async (data) => {
  const config = {
    url: '/api/exam/question/add',
    method: 'POST',
    data: data,
  }
  const result = await ApiRequest(config)
  return result
}

export const getQuestionsDataapi = async (id) => {
  const config = {
    url: `/api/exam/question/list`,
    method: 'GET',
  }
  const result = await ApiRequest(config)
  return result
}

export const editQuestionsapi = async (datas) => {
  const data = { ...datas }

  const config = {
    url: '/api/exam/question/edit',
    method: 'POST',
    data: data,
  }
  const result = await ApiRequest(config)
  return result
}

export const generateExamApi = async (datas) => {
  const data = { ...datas }
  const config = {
    url: '/api/exam/link/generate',
    method: 'POST',
    data: data,
  }
  const result = await ApiRequest(config)
  return result
}

export const getQuizQuestions = async (linkId) => {
  const config = {
    url: `/api/exam/link/${linkId}`,
    method: 'GET',
  }
  const result = await ApiRequest(config)
  return result
}

export const addQuizAnswersapi = async (datas) => {
  const config = {
    url: '/api/exam/result/add',
    method: 'POST',
    data: datas,
  }
  const result = await ApiRequest(config)
  return result
}

export const linkDataapi = async (id) => {
  const config = {
    url: `/api/exam/link/list`,
    method: 'GET',
  }
  const result = await ApiRequest(config)
  return result
}

export const resultDataapi = async (linkId, id) => {
  var data = { linkId: linkId }
  const config = {
    url: `/api/exam/result/list`,
    method: 'POST',
    data: data,
  }
  const result = await ApiRequest(config)
  return result
}

export const deleteExamDataapi = async (id) => {
  const config = {
    url: `/api/exam/delete`,
    method: 'DELETE',
    data: id,
  }
  const result = await ApiRequest(config)
  return result
}

export const deleteQuestionapi = async (id) => {
  const config = {
    url: `/api/exam/question/delete`,
    method: 'DELETE',
    data: id,
  }
  const result = await ApiRequest(config)
  return result
}

export const editUserapi = async (data) => {
  const config = {
    url: '/api/user/edit',
    method: 'PUT',
    enctype: 'multipart/form-data',
    data: data,
  }
  const result = await ApiRequest(config)
  return result
}

export const getUserDataapi = async (id) => {
  const config = {
    url: `/api/user/profile`,
    method: 'GET',
  }
  const result = await ApiRequest(config)
  return result
}
