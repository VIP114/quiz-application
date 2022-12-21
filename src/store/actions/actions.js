export const REGISTER_USER_BEGIN = 'REGISTER_USER_BEGIN'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR'

export const LOGIN_USER_BEGIN = 'LOGIN_USER_BEGIN'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'

export const GET_COMPANYDATA_BEGIN = 'GET_COMPANYDATA_BEGIN'
export const GET_COMPANYDATA_SUCCESS = 'GET_COMPANYDATA_SUCCESS'
export const GET_COMPANYDATA_FAILURE = 'GET_COMPANYDATA_FAILURE'

export const ADD_COMPANYDATA_BEGIN = 'ADD_COMPANYDATA_BEGIN'
export const ADD_COMPANYDATA_SUCCESS = 'ADD_COMPANYDATA_SUCCESS'
export const ADD_COMPANYDATA_FAILURE = 'ADD_COMPANYDATA_FAILURE'

export const EDIT_COMPANYDATA_BEGIN = 'EDIT_COMPANYDATA_BEGIN'
export const EDIT_COMPANYDATA_SUCCESS = 'EDIT_COMPANYDATA_SUCCESS'
export const EDIT_COMPANYDATA_FAILURE = 'EDIT_COMPANYDATA_FAILURE'

export const DELETE_COMPANYDATA_BEGIN = 'DELETE_COMPANYDATA_BEGIN'
export const DELETE_COMPANYDATA_SUCCESS = 'DELETE_COMPANYDATA_SUCCESS'
export const DELETE_COMPANYDATA_FAILURE = 'DELETE_COMPANYDATA_FAILURE'

export const GET_HR_BEGIN = 'GET_HR_BEGIN'
export const GET_HR_SUCCESS = 'GET_HR_SUCCESS'
export const GET_HR_FAILURE = 'GET_HR_FAILURE'

export const ADD_HR_BEGIN = 'ADD_HR_BEGIN'
export const ADD_HR_SUCCESS = 'ADD_HR_SUCCESS'
export const ADD_HR_FAILURE = 'ADD_HR_FAILURE'

export const EDIT_HR_BEGIN = 'EDIT_HR_BEGIN'
export const EDIT_HR_SUCCESS = 'EDIT_HR_SUCCESS'
export const EDIT_HR_FAILURE = 'EDIT_HR_FAILURE'

export const DELETE_HR_BEGIN = 'DELETE_HR_BEGIN'
export const DELETE_HR_SUCCESS = 'DELETE_HR_SUCCESS'
export const DELETE_HR_FAILURE = 'DELETE_HR_FAILURE'

export const ADD_EXAMTYPE_BEGIN = 'ADD_EXAMTYPE_BEGIN'
export const ADD_EXAMTYPE_SUCCESS = 'ADD_EXAMTYPE_SUCCESS'
export const ADD_EXAMTYPE_FAILURE = 'ADD_EXAMTYPE_FAILURE'

export const GET_EXAMTYPE_BEGIN = 'GET_EXAMTYPE_BEGIN'
export const GET_EXAMTYPE_SUCCESS = 'GET_EXAMTYPE_SUCCESS'
export const GET_EXAMTYPE_FAILURE = 'GET_EXAMTYPE_FAILURE'

export const EDIT_EXAMTYPE_BEGIN = 'EDIT_EXAMTYPE_BEGIN'
export const EDIT_EXAMTYPE_SUCCESS = 'EDIT_EXAMTYPE_SUCCESS'
export const EDIT_EXAMTYPE_FAILURE = 'EDIT_EXAMTYPE_FAILURE'

export const DELETE_EXAMTYPE_BEGIN = 'DELETE_EXAMTYPE_BEGIN'
export const DELETE_EXAMTYPE_SUCCESS = 'DELETE_EXAMTYPE_SUCCESS'
export const DELETE_EXAMTYPE_FAILURE = 'DELETE_EXAMTYPE_FAILURE'

export const ADD_QUESTIONS_BEGIN = 'ADD_QUESTIONS_BEGIN'
export const ADD_QUESTIONS_SUCCESS = 'ADD_QUESTIONS_SUCCESS'
export const ADD_QUESTIONS_FAILURE = 'ADD_QUESTIONS_FAILURE'

export const GET_QUESTIONS_BEGIN = 'GET_QUESTIONS_BEGIN'
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS'
export const GET_QUESTIONS_FAILURE = 'GET_QUESTIONS_FAILURE'

export const EDIT_QUESTIONS_BEGIN = 'EDIT_QUESTIONS_BEGIN'
export const EDIT_QUESTIONS_SUCCESS = 'EDIT_QUESTIONS_SUCCESS'
export const EDIT_QUESTIONS_FAILURE = 'EDIT_QUESTIONS_FAILURE'

export const DELETE_QUESTIONS_BEGIN = 'DELETE_QUESTIONS_BEGIN'
export const DELETE_QUESTIONS_SUCCESS = 'DELETE_QUESTIONS_SUCCESS'
export const DELETE_QUESTIONS_FAILURE = 'DELETE_QUESTIONS_FAILURE'

export const ADD_GENERATEEXAM_BEGIN = 'ADD_GENERATEEXAM_BEGIN'
export const ADD_GENERATEEXAM_SUCCESS = 'ADD_GENERATEEXAM_SUCCESS'
export const ADD_GENERATEEXAM_FAILURE = 'ADD_GENERATEEXAM_FAILURE'

export const GET_QUIZQUESTIONS_BEGIN = 'GET_QUIZQUESTIONS_BEGIN'
export const GET_QUIZQUESTIONS_SUCCESS = 'GET_QUIZQUESTIONS_SUCCESS'
export const GET_QUIZQUESTIONS_FAILURE = 'GET_QUIZQUESTIONS_FAILURE'

export const ADD_QUIZDATA_BEGIN = 'ADD_QUIZDATA_BEGIN'
export const ADD_QUIZDATA_SUCCESS = 'ADD_QUIZDATA_SUCCESS'
export const ADD_QUIZDATA_FAILURE = 'ADD_QUIZDATA_FAILURE'

export const GET_LINKDATA_BEGIN = 'GET_LINKDATA_BEGIN'
export const GET_LINKDATA_SUCCESS = 'GET_LINKDATA_SUCCESS'
export const GET_LINKDATA_FAILURE = 'GET_LINKDATA_FAILURE'

export const GET_RESULTDATA_BEGIN = 'GET_RESULTDATA_BEGIN'
export const GET_RESULTDATA_SUCCESS = 'GET_RESULTDATA_SUCCESS'
export const GET_RESULTDATA_FAILURE = 'GET_RESULTDATA_FAILURE'

export const EDIT_USER_BEGIN = 'EDIT_USER_BEGIN'
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS'
export const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE'

export const GET_USERDATA_BEGIN = 'GET_USERDATA_BEGIN'
export const GET_USERDATA_SUCCESS = 'GET_USERDATA_SUCCESS'
export const GET_USERDATA_FAILURE = 'GET_USERDATA_FAILURE'

export const loginUser = (payload) => ({
  type: LOGIN_USER_BEGIN,
  payload,
})

export const getCompanyData = (payload) => ({
  type: GET_COMPANYDATA_BEGIN,
  payload,
})
export const addCompanyData = (payload) => ({
  type: ADD_COMPANYDATA_BEGIN,
  payload,
})
export const editCompanyData = (payload) => ({
  type: EDIT_COMPANYDATA_BEGIN,
  payload,
})
export const deleteCompanyData = (payload) => ({
  type: DELETE_COMPANYDATA_BEGIN,
  payload,
})

export const gethRData = (payload) => ({
  type: GET_HR_BEGIN,
  payload,
})

export const addHrData = (payload) => ({
  type: ADD_HR_BEGIN,
  payload,
})

export const editHrData = (payload) => ({
  type: EDIT_HR_BEGIN,
  payload,
})
export const deleteHrData = (payload) => ({
  type: DELETE_HR_BEGIN,
  payload,
})

export const addExamType = (payload) => ({
  type: ADD_EXAMTYPE_BEGIN,
  payload,
})

export const getExamTypeData = (payload) => ({
  type: GET_EXAMTYPE_BEGIN,
  payload,
})

export const editExamTypeData = (payload) => ({
  type: EDIT_EXAMTYPE_BEGIN,
  payload,
})

export const addQuestions = (payload) => ({
  type: ADD_QUESTIONS_BEGIN,
  payload,
})

export const getQuestionsData = (payload) => ({
  type: GET_QUESTIONS_BEGIN,
  payload,
})

export const editQuestionsData = (payload) => ({
  type: EDIT_QUESTIONS_BEGIN,
  payload,
})

export const addGenerateExam = (payload) => ({
  type: ADD_GENERATEEXAM_BEGIN,
  payload,
})

export const getQuizQuestions = (payload) => ({
  type: GET_QUIZQUESTIONS_BEGIN,
  payload,
})

export const addQuizData = (payload) => ({
  type: ADD_QUIZDATA_BEGIN,
  payload,
})

export const getLinkData = (payload) => ({
  type: GET_LINKDATA_BEGIN,
  payload,
})
export const getResultData = (payload) => ({
  type: GET_RESULTDATA_BEGIN,
  payload,
})

export const deleteExamData = (payload) => ({
  type: DELETE_EXAMTYPE_BEGIN,
  payload,
})

export const deleteQuestion = (payload) => ({
  type: DELETE_QUESTIONS_BEGIN,
  payload,
})

export const editUser = (payload) => ({
  type: EDIT_USER_BEGIN,
  payload,
})

export const getUserData = (payload) => ({
  type: GET_USERDATA_BEGIN,
  payload,
})
