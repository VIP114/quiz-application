import React from 'react'
import Company from './layout/comapny/Company'
import ExamType from './layout/examtype/ExamType'
import GenerateLink from './layout/generatelink/GenerateLink'
import HR from './layout/hr/HR'
import Question from './layout/question/Question'
import Result from './layout/results/Result'
import AddCompany from './views/pages/add/AddCompany'
import AddQuestions from './views/pages/add/AddQuestions'
import AddHr from './views/pages/add/AddHr'
import View from './layout/view/View'
import AddExamType from './views/pages/add/AddExamType'
import Deletemodal from './views/notifications/modals/deleteModal'
import EditProfile from './layout/editProfile/EditProfile'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Quiz = React.lazy(() => import('./layout/quizExam/Quiz'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/add', name: 'Add Page', component: AddCompany },
  { path: '/quiz/:linkId', exact: true, name: 'Quiz', component: Quiz },
  { path: '/editprofile', exact: true, name: 'Edit Profile', component: EditProfile },
  { path: '/company', name: 'Company', component: Company },
  { path: '/view', name: 'View', component: View },
  { path: '/hr', name: 'HR', component: HR },
  { path: '/examtype', name: 'Exam type', component: ExamType },
  { path: '/addexamtype', name: 'AddExamType', component: AddExamType },
  { path: '/generatelink', name: 'Generate Link', component: GenerateLink },
  { path: '/question', name: 'Question', component: Question },
  { path: '/addquestions', name: 'Add Questions', component: AddQuestions },
  { path: '/result', name: 'Result', component: Result },
  { path: '/addhr', name: 'HR Information', component: AddHr },
  { path: '/notifications/deleteModal', name: 'Modals', component: Deletemodal },
]

export default routes
