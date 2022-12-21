import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import changeState from './index'
import {
  editCompanyDataReducer,
  CompanyDataReducer,
  deleteCompanyDataReducer,
  addcompanyDataReducer,
} from './companyDataReducer'
import {
  addExamTypeReducer,
  deleteExamDataReducer,
  editExamTypeDataReducer,
  getExamTypeDataReducer,
} from './examTypeReducer'
import {
  addhrDataReducer,
  deletehrDataReducer,
  edithrDataReducer,
  hrDataReducer,
} from './hrDataReducer'
import {
  addQuestionsReducer,
  deleteQuestionReducer,
  editQuestionsDataReducer,
  getQuestionsDataReducer,
} from './questionsDataReducer'
import { generateExamReducer } from './generateExamReducer'
import { quizQuestionsReducer } from './getQuizQuestionsReducer'
import { addQuizAnswersReducer } from './quizAnswersDataReducer'
import { linkDataReducer } from './linkDataReducer'
import { resultDataReducer } from './resultDataReducer'
import { editUserReducer, getUserDataReducer } from './editUserReducer'

export const rootReducer = combineReducers({
  stating: changeState,
  user: loginReducer,
  companyData: CompanyDataReducer,
  addCompanyData: addcompanyDataReducer,
  editCompanyDataReducer: editCompanyDataReducer,
  deleteCompanyDataReducer: deleteCompanyDataReducer,
  hrDataReducer: hrDataReducer,
  addHrData: addhrDataReducer,
  editHrData: edithrDataReducer,
  deleteHrData: deletehrDataReducer,
  examTypeReducer: addExamTypeReducer,
  getExamType: getExamTypeDataReducer,
  editExamType: editExamTypeDataReducer,
  addQuestions: addQuestionsReducer,
  getQuestions: getQuestionsDataReducer,
  editQuestions: editQuestionsDataReducer,
  generateExam: generateExamReducer,
  quizQuestions: quizQuestionsReducer,
  addQuizAnswers: addQuizAnswersReducer,
  linkData: linkDataReducer,
  resultData: resultDataReducer,
  deleteExamData: deleteExamDataReducer,
  deleteQuestion: deleteQuestionReducer,
  editUser: editUserReducer,
  userData: getUserDataReducer,
})
