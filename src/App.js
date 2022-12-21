/* eslint-disable prettier/prettier */
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Company from './layout/comapny/Company'
import ExamType from './layout/examtype/ExamType'
import GenerateLink from './layout/generatelink/GenerateLink'
import HR from './layout/hr/HR'
import Question from './layout/question/Question'
import Result from './layout/results/Result'
import './scss/style.scss'
import AddCompany from './views/pages/add/AddCompany'
import AddHr from './views/pages/add/AddHr'
import AddQuestions from './views/pages/add/AddQuestions'
import View from './layout/view/View'
import history from './utils/history'
import AddExamType from './views/pages/add/AddExamType'
import Quiz from './layout/quizExam/Quiz'
import EditProfile from './layout/editProfile/EditProfile'
import PublicRoute from './routes/publicRoute'
import { isLogin } from './utils'
import PrivateRoute from './routes/privateRoute'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/add/AddCompany'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  return (
    <Router history={history}>
      <React.Suspense fallback={loading}>
        <Switch>
        <PrivateRoute
             exact
             path="/"
             name="Default Layout"
             component={DefaultLayout}
          />
          <PublicRoute
             exact
             path="/login"
             name="Login"
             component={Login}
          />
           <PublicRoute
             exact
             path="/500" 
             name="Page 500"
             component={Page500}
          />
          
           <PublicRoute
             exact
             path="/404"
             name="Page 404"
             component={Page404}
          />
           <PrivateRoute
             exact
             path="/add"
             name="Add Page"
             component={AddCompany}
          />
            <PrivateRoute
            exact
            path="/editprofile"
            name="Default Layout"
            component={EditProfile}
          />
        <PrivateRoute
            exact
            path="/dashboard"
            name="Default Layout"
            component={DefaultLayout}
          />
           <PublicRoute
            exact
            path="/quiz/:linkId"
            name="Quiz"
            component={Quiz}
          />
           <PrivateRoute
            exact
            path="/company"
            name="Company"
            component={Company}
          />
            <PrivateRoute
            exact
            path="/view"
            name="View"
            component={View}
          />
          <PrivateRoute
            exact
            path="/hr"
            name="HR"
            component={HR}
          />
           <PrivateRoute
            exact
            path="/examtype"
            name="ExamType"
            component={ExamType}
          />
           <PrivateRoute
            exact
            path="/addexamtype"
            name="ExamType"
            component={AddExamType}
          />
             <PrivateRoute
            exact
            path="/generatelink"
            name="GenerateLink"
            component={GenerateLink}
          />
           <PrivateRoute
            exact
            path="/addquestions"
            name="Add Questions"
            component={AddQuestions}
          />
           <PrivateRoute
            exact
            path="/question"
            name="Question"
            component={Question}
          />
          <PrivateRoute
            exact
            path="/result"
            name="Result"
            component={Result}
          />
          <PrivateRoute
            exact
            path="/addhr"
            name="Add HR"
            component={AddHr}
          />
        </Switch>
      </React.Suspense>
    </Router>
  )
}

export default App
