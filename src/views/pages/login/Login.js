import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import quizLogo from '../../../assets/images/quiz-logo.png'
import './login.scss'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormFeedback,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { loginUser } from 'src/store/actions/actions'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const dispatch = useDispatch()
  let history = useHistory()
  const role1 = useSelector((state) => state.stating.role)
  const loading = useSelector((state) => state.user.loading)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [validated, setValidated] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('role', role1)
  }, [role1])

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity() === false) {
      const user = { email, password, role }
      dispatch(loginUser(user))
      dispatch({ type: 'ADMIN', role: role })
    }
    setValidated(true)
  }
  return (
    <div className="page min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5} className="cardCol">
            <CCardGroup>
              <CCard className="card-content">
                <CCardBody width="50%" className="card-body">
                  <CForm
                    className="needs-validation"
                    noValidate
                    validated={validated}
                    onSubmit={onSubmit}
                  >
                    <img src={quizLogo} className="logo"></img>
                    {/* <h1 className="text-center">Login</h1> */}
                    <p className="text-medium-emphasis text-center sign-in-text">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        className="form-input"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={email}
                        autoComplete="username"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <CFormFeedback invalid>Please choose a username</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        className="form-input"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        autoComplete="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <CFormFeedback invalid>Please enter a valid password</CFormFeedback>
                    </CInputGroup>
                    <p className="text-medium-emphasis text-center sign-in-text">
                      Select your role
                    </p>
                    <div className="radio-form d-flex justify-content-center gap-5">
                      <div
                        className="form-check"
                        onChange={(e) => {
                          setRole(e.target.value)
                        }}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radio"
                          id="exampleRadios1"
                          value="super"
                          required
                          onChange={(e) => {
                            setRole(e.target.value)
                          }}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                          Super
                        </label>
                      </div>
                      <div className="form-check radio-btn">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radio"
                          id="exampleRadios2"
                          value="admin"
                          required
                          onChange={(e) => {
                            setRole(e.target.value)
                          }}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                          Company
                        </label>
                      </div>
                      <div className="form-check radio-btn">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radio"
                          id="exampleRadios3"
                          value="hr"
                          required
                          onChange={(e) => {
                            setRole(e.target.value)
                          }}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios3">
                          HR
                        </label>
                      </div>
                    </div>
                    <br />
                    <CRow className="text-center">
                      <CCol xs={12}>
                        {!loading ? (
                          <button type="submit" className="text-white px-4 login-btn">
                            Login
                          </button>
                        ) : (
                          <div className="spinner-border text-dark" role="status">
                            <span className="sr-only"></span>
                          </div>
                        )}
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
