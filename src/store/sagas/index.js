import { takeLatest, all } from 'redux-saga/effects'
import {
  GET_QUIZQUESTIONS_BEGIN,
  ADD_GENERATEEXAM_BEGIN,
  ADD_COMPANYDATA_BEGIN,
  ADD_EXAMTYPE_BEGIN,
  ADD_HR_BEGIN,
  ADD_QUESTIONS_BEGIN,
  DELETE_COMPANYDATA_BEGIN,
  DELETE_HR_BEGIN,
  EDIT_COMPANYDATA_BEGIN,
  EDIT_EXAMTYPE_BEGIN,
  EDIT_HR_BEGIN,
  EDIT_QUESTIONS_BEGIN,
  GET_COMPANYDATA_BEGIN,
  GET_EXAMTYPE_BEGIN,
  GET_HR_BEGIN,
  GET_QUESTIONS_BEGIN,
  LOGIN_USER_BEGIN,
  ADD_QUIZDATA_BEGIN,
  GET_LINKDATA_BEGIN,
  GET_RESULTDATA_BEGIN,
  DELETE_QUESTIONS_BEGIN,
  DELETE_EXAMTYPE_BEGIN,
  EDIT_USER_BEGIN,
  GET_USERDATA_BEGIN,
} from '../actions/actions'
import { addExamType, deleteExamData, editExamTypeData, getExamTypeData } from './examTypeSaga'
import { addCompanyData } from './companyDataSaga'
import { companyData } from './companyDataSaga'
import { deleteCompanyDataSaga } from './companyDataSaga'
import { editCompanyDataSaga } from './companyDataSaga'
import { addHrDataSaga, deleteHrDataSaga, editHrDataSaga, hrData } from './hrSaga'
import { Login } from './loginSaga'
import {
  addQuestions,
  deleteQuestionSaga,
  editQuestionsSaga,
  getQuestionsData,
} from './questionsDataSaga'
import { generateExam } from './generateExamSaga'
import { quizQuestionsSaga } from './getQuizQuestionsSaga'
import { addQuizAnswersSaga } from './quizAnswersDataSaga'
import { linkDataSaga } from './linkDataSaga'
import { resultDataSaga } from './resultDataSaga'
import { editUserSaga, getUserDataSaga } from './editUserSaga'

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN_USER_BEGIN, Login),
    takeLatest(GET_COMPANYDATA_BEGIN, companyData),
    takeLatest(ADD_COMPANYDATA_BEGIN, addCompanyData),
    takeLatest(EDIT_COMPANYDATA_BEGIN, editCompanyDataSaga),
    takeLatest(DELETE_COMPANYDATA_BEGIN, deleteCompanyDataSaga),
    takeLatest(GET_HR_BEGIN, hrData),
    takeLatest(ADD_HR_BEGIN, addHrDataSaga),
    takeLatest(EDIT_HR_BEGIN, editHrDataSaga),
    takeLatest(DELETE_HR_BEGIN, deleteHrDataSaga),
    takeLatest(ADD_EXAMTYPE_BEGIN, addExamType),
    takeLatest(GET_EXAMTYPE_BEGIN, getExamTypeData),
    takeLatest(EDIT_EXAMTYPE_BEGIN, editExamTypeData),
    takeLatest(ADD_QUESTIONS_BEGIN, addQuestions),
    takeLatest(GET_QUESTIONS_BEGIN, getQuestionsData),
    takeLatest(EDIT_QUESTIONS_BEGIN, editQuestionsSaga),
    takeLatest(ADD_GENERATEEXAM_BEGIN, generateExam),
    takeLatest(GET_QUIZQUESTIONS_BEGIN, quizQuestionsSaga),
    takeLatest(ADD_QUIZDATA_BEGIN, addQuizAnswersSaga),
    takeLatest(GET_LINKDATA_BEGIN, linkDataSaga),
    takeLatest(GET_RESULTDATA_BEGIN, resultDataSaga),
    takeLatest(DELETE_QUESTIONS_BEGIN, deleteQuestionSaga),
    takeLatest(DELETE_EXAMTYPE_BEGIN, deleteExamData),
    takeLatest(EDIT_USER_BEGIN, editUserSaga),
    takeLatest(GET_USERDATA_BEGIN, getUserDataSaga),
  ])
}
