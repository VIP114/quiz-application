import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MultiSelect } from 'react-multi-select-component'
import { CButton, CCard, CContainer, CButtonGroup, CRow, CCol, CFormInput } from '@coreui/react'

import { addGenerateExam, getQuestionsData } from 'src/store/actions/actions'
import { AppHeader, AppSidebar } from 'src/components'
import './generateLink.scss'

const GenerateLink = () => {
  const dispatch = useDispatch()
  const questionData = useSelector((state) => state.getQuestions.getQuestionsData)
  const loading = useSelector((state) => state.generateExam.loading)
  const [isTrue, setIsTrue] = useState(false)

  const [userEmail, setUserEmail] = useState([])
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  const [selected, setSelected] = useState([])
  const [questionId, setQuestionId] = useState([])
  const [dropdownQuestions, setDropdownQuestions] = useState([])

  useEffect(() => {
    dispatch(getQuestionsData(101))
  }, [])

  useEffect(() => {
    if (questionData) {
      const dropdownQuestionsData = questionData.map((items) => {
        return {
          value: items._id,
          label: items.title,
        }
      })
      setDropdownQuestions(dropdownQuestionsData)
    }
  }, [questionData])

  const handleKeyDown = (evt) => {
    if (['Enter', 'Tab', ','].includes(evt.key)) {
      evt.preventDefault()
      value.trim()
      if (value && isValid(value)) {
        setUserEmail([...userEmail, value])
        setValue('')
      }
    }
  }
  const handleChange = (evt) => {
    setValue(evt.target.value)
    setError(null)
  }

  const handleDelete = (item) => {
    setUserEmail([...userEmail?.filter((i) => i !== item)])
  }
  const handlePaste = (evt) => {
    evt.preventDefault()

    var paste = evt.clipboardData.getData('text')
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g)

    if (emails) {
      var toBeAdded = emails.filter((email) => isInList(email))
      setUserEmail({
        items: [{ ...items, ...toBeAdded }],
      })
    }
  }

  const isValid = (email) => {
    let error = null

    if (isInList(email)) {
      error = `${email} has already been added.`
    }

    if (!isEmail(email)) {
      error = `${email} is not a valid email address.`
    }

    if (error) {
      setError(error)

      return false
    }

    return true
  }

  const isInList = (email) => {
    return userEmail.includes(email)
  }

  const isEmail = (email) => {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email)
  }
  const checkingDropdown = (e) => {
    setSelected(e)
    setQuestionId(e.map((values) => values.value))
  }
  const generateExam = (e) => {
    if (userEmail.length !== 0 && questionId.length !== 0) {
      setIsTrue(true)
      const generateExam = { questionId, userEmail }
      e.preventDefault()
      dispatch(addGenerateExam(generateExam))
      if (loading) {
        setIsTrue(false)
      } else {
        setIsTrue(true)
      }
    } else {
      return alert('please enter Question and Email')
    }
  }
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <CContainer fluid>
          <CCard className="p-4">
            <h3>Generate Link For Exam</h3>
            <hr className="mb-4" />
            <CRow>
              <CCol xs={6}>
                <MultiSelect
                  options={dropdownQuestions}
                  value={selected.map((e) => {
                    return { value: e.value, label: e.label }
                  })}
                  onChange={(e) => checkingDropdown(e)}
                  labelledBy="Questions"
                  required
                />
              </CCol>
              <CCol xs={6}>
                <CFormInput
                  type="text"
                  className={'custom-input ' + (error && ' has-error')}
                  value={value}
                  placeholder="Type or paste email addresses and press `Enter`..."
                  onKeyDown={(evt) => handleKeyDown(evt)}
                  onChange={(evt) => handleChange(evt)}
                  onPaste={(evt) => handlePaste(evt)}
                />
                {error && <p className="error">{error}</p>}
                <div className="mt-2">
                  {userEmail.map((item) => (
                    <div className="tag-item" key={item}>
                      {item}
                      <button type="button" className="button" onClick={() => handleDelete(item)}>
                        &times;
                      </button>
                      <hr />
                    </div>
                  ))}
                </div>
              </CCol>
            </CRow>

            <div className="d-flex justify-content-center">
              {!isTrue ? (
                <CButtonGroup className="mt-4">
                  <CButton onClick={generateExam} className="custom-btn">
                    Generate Exam
                  </CButton>
                </CButtonGroup>
              ) : (
                <div className="spinner-border text-light" role="status">
                  <span className="sr-only" />
                </div>
              )}
            </div>
          </CCard>
        </CContainer>
      </div>
    </div>
  )
}

export default GenerateLink
