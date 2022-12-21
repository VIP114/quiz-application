/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import './Add.scss'
import {
  CButton,
  CCard,
  CCardGroup,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CFormFeedback,
} from '@coreui/react'
import { AppHeader, AppSidebar } from 'src/components'
import { addQuestions, editQuestionsData, getExamTypeData } from 'src/store/actions/actions'
import Select from 'react-select'

const AddExamType = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const examData = useSelector((state) => state.getExamType.examTypeData)
  const loadingAdd = useSelector((state) => state.addQuestions.loading)
  const loadingEdit = useSelector((state) => state.editQuestions.loading)

  const [isTrue, setIsTrue] = useState(false)
  const [examId, setExamId] = useState('')
  const [questionId, setQuestionId] = useState('')
  const [title, setTitle] = useState('')
  const [questionType, setQuestionType] = useState('')
  const [examType, setExamType] = useState('')
  const [examTypeOptions, setExamTypeOptions] = useState([])
  const [validated, setValidated] = useState(false)

  useEffect(() => {
    if (examData) {
      const examTypeOptions = examData.map((items) => {
        return {
          value: items._id,
          label: items.title,
        }
      })
      setExamTypeOptions(examTypeOptions)
    }
  }, [examData])

  useEffect(() => {
    dispatch(getExamTypeData(100))
    if (location.state) {
      setQuestionId(location.state._id)
      setTitle(location.state.title)
      setQuestionType(location.state.questionType)
      setExamType(location.state.examType)
      setExamId(location.state._id)
    }
  }, [])

  const checkingDropdown = (e) => {
    setExamId(e.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if ((!form.checkValidity() === false && examId !== '') || null) {
      setIsTrue(true)
      const addQuestionData = { examId, title, questionType }
      dispatch(addQuestions(addQuestionData))
      if (loadingAdd) {
        setIsTrue(false)
      } else {
        setIsTrue(true)
      }
    } else {
      alert('Please enter all details and select atleast 1 exam-type')
      setValidated(true)
    }
  }
  const onUpdate = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity() === false) {
      setIsTrue(true)
      const editQuestionData = { questionId, title, questionType }
      dispatch(editQuestionsData(editQuestionData))
    }
    setValidated(true)
  }

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div>
          <CContainer fluid>
            <CRow className="shadow-lg m-1">
              <CCol md={12} className="ml-1 p-0">
                <CCardGroup>
                  <CCard className="p-3">
                    <CCardBody>
                      {location.state ? <h3>Update Questions</h3> : <h3>Add Questions</h3>}
                      <div>
                        <hr />
                        <CForm
                          className="needs-validation p-4"
                          noValidate
                          validated={validated}
                          onSubmit={location.state ? onUpdate : onSubmit}
                        >
                          <CRow className="mb-3">
                            <CFormLabel htmlFor="input1" className="col-sm-2 col-form-label">
                              Title
                            </CFormLabel>
                            <CCol sm={10}>
                              <CFormInput
                                placeholder="Type your question"
                                type="input1"
                                id="Question"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                              />
                              <CFormFeedback invalid>Please enter a valid text </CFormFeedback>
                            </CCol>
                          </CRow>
                          <CRow className="mb-3">
                            <CFormLabel htmlFor="question" className="col-sm-2 col-form-label">
                              Question Type
                            </CFormLabel>

                            <CCol sm={10}>
                              <CFormInput
                                type="text"
                                placeholder="Add question type (eg. video, text, etc)"
                                id="question"
                                value={questionType}
                                onChange={(e) => setQuestionType(e.target.value)}
                                required
                              />
                              <CFormFeedback invalid>Please enter a valid text</CFormFeedback>
                            </CCol>
                          </CRow>
                          {location.state ? null : (
                            <CRow className="mb-3">
                              <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">
                                Exam Type
                              </CFormLabel>
                              <CCol sm={10}>
                                <Select
                                  placeholder="Select Exam-Type"
                                  options={examTypeOptions}
                                  required
                                  onChange={(e) => checkingDropdown(e)}
                                />
                                <CFormFeedback invalid>
                                  Please select a valid exam-type
                                </CFormFeedback>
                              </CCol>
                            </CRow>
                          )}
                          <br />
                          <br />
                          {location.state ? (
                            <div className="add-button">
                              {loadingEdit ? (
                                <div className="spinner-border text-light" role="status">
                                  <span className="sr-only"></span>
                                </div>
                              ) : (
                                <CButton
                                  id="onUpdate"
                                  className="custom-btn btn-width"
                                  type="submit"
                                >
                                  Update
                                </CButton>
                              )}
                              <Link className="mx-4" to={'/question'}>
                                <CButton className="custom-btn-outline btn-width">Cancel</CButton>
                              </Link>
                            </div>
                          ) : (
                            <div className="add-button">
                              {loadingAdd ? (
                                <div className="spinner-border text-light" role="status">
                                  <span className="sr-only"></span>
                                </div>
                              ) : (
                                <CButton
                                  id="submitting"
                                  className="custom-btn btn-width"
                                  type="submit"
                                >
                                  Add
                                </CButton>
                              )}
                              <Link className="mx-4" to={'/question'}>
                                <CButton className="btn-width custom-btn-outline">Cancel</CButton>
                              </Link>
                            </div>
                          )}
                          {/* <div className="add-button ">
                            {location.state ? (
                              <CButton className="btn-dark btn-width" type="submit">
                                Update
                              </CButton>
                            ) : (
                              <CButton className="btn-dark btn-width" type="submit">
                                Add
                              </CButton>
                            )}

                            <Link className="mx-4" to={'/question'}>
                              <CButton className="btn-dark btn-width">Cancel</CButton>
                            </Link>
                          </div> */}
                        </CForm>
                      </div>
                    </CCardBody>
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      </div>
    </div>
  )
}

export default AddExamType
