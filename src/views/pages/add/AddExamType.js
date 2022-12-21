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
import { addExamType, editExamTypeData } from 'src/store/actions/actions'

const AddExamType = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const loadingEdit = useSelector((state) => state.examTypeReducer.loading)
  const loadingAdd = useSelector((state) => state.editExamType.loading)

  const [isTrue, setIsTrue] = useState(false)
  const [title, setTitle] = useState('')
  const [examId, setExamId] = useState('')
  const [validated, setValidated] = useState(false)

  useEffect(() => {
    if (location.state) {
      setExamId(location.state._id)
      setTitle(location.state.title)
    }
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity() === false) {
      setIsTrue(true)
      const examType = { title }
      dispatch(addExamType(examType))
      if (loadingAdd) {
        setIsTrue(false)
      } else {
        setIsTrue(true)
      }
    }
    setValidated(true)
  }

  const onUpdate = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity() === false) {
      setIsTrue(true)
      const editExamType = { examId, title }
      dispatch(editExamTypeData(editExamType))
      if (loadingEdit) {
        setIsTrue(false)
      } else {
        setIsTrue(true)
      }
    }
    setValidated(true)
  }
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <CContainer>
          <CRow className="shadow-lg m-1">
            <CCol className="ml-1 p-0">
              <CCard className="p-3">
                <CCardBody>
                  {location.state ? <h3> Update ExamType</h3> : <h3>Add ExamType</h3>}
                  <hr />
                  <br />

                  <CForm
                    className="p-4"
                    noValidate
                    validated={validated}
                    onSubmit={location.state ? onUpdate : onSubmit}
                  >
                    <CRow className="mb-3">
                      <CFormLabel htmlFor="title" className="col-sm-1 col-form-label">
                        Title
                      </CFormLabel>

                      <CCol sm={10}>
                        <CFormInput
                          name="title"
                          placeholder="Add question type (eg. video, text, etc)"
                          type="text"
                          id="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                        <CFormFeedback invalid>Please enter a valid text</CFormFeedback>
                      </CCol>
                    </CRow>
                    <br />
                    {location.state ? (
                      <div className="add-button">
                        {loadingAdd ? (
                          <div className="spinner-border text-light" role="status">
                            <span className="sr-only"></span>
                          </div>
                        ) : (
                          <CButton id="onUpdate" className="btn-dark btn-width" type="submit">
                            Update
                          </CButton>
                        )}
                        <Link className="mx-4" to={'/examtype'}>
                          <CButton className="btn-dark btn-width">Cancel</CButton>
                        </Link>
                      </div>
                    ) : (
                      <div className="add-button">
                        {loadingEdit ? (
                          <div className="spinner-border text-light" role="status">
                            <span className="sr-only"></span>
                          </div>
                        ) : (
                          <CButton id="submitting" className="custom-btn btn-width" type="submit">
                            Add
                          </CButton>
                        )}
                        <Link className="mx-4" to={'/examtype'}>
                          <CButton className="btn-width custom-btn-outline">Cancel</CButton>
                        </Link>
                      </div>
                    )}
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </div>
  )
}

export default AddExamType
