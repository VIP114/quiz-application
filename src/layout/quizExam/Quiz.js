import { CButton, CCard } from '@coreui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Exam.scss'
import Paginator from './paginator/Paginator'
import Stepper from 'react-stepper-horizontal'
import { addQuizData, getQuizQuestions } from 'src/store/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import VideoRecorder from 'react-video-recorder'
import { Buffer } from 'buffer'
window.Buffer = Buffer

const Quiz = () => {
  const { linkId } = useParams()
  const dispatch = useDispatch()
  const quizQuestions = useSelector((state) => state.quizQuestions.quizQuestionsData)
  const loadingSubmit = useSelector((state) => state.addQuizAnswers.loading)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(1)
  const [assign, setAssign] = useState([])
  const [btn, setBtn] = useState(false)
  const [myFile, setMyFile] = useState([])
  const [disableSubmit, setDisableSubmit] = useState(false)
  const [disableNext, setDisableNext] = useState(false)
  const [isRecordingComplete, setisRecordingComplete] = useState(false)

  useEffect(() => {
    dispatch(getQuizQuestions(linkId))
  }, [])

  const pages = []
  for (let i = 1; i < Math.ceil(quizQuestions?.length + 1 / itemsPerPage); i++) {
    pages.push(i)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  // 1
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = quizQuestions?.slice(indexOfFirstItem, indexOfLastItem)

  const handleClick = (event) => {
    if (Number(event.target.id) === currentPage + 1) {
      event.preventDefault()
      setCurrentPage(Number(event.target.id))
      setAssign((prevState) => [...prevState, event.target.id])
    }
  }
  const renderPageNumbers = pages.map((number) => {
    return (
      <button
        key={number}
        id={number}
        disabled={number < currentPage ? true : false}
        onClick={handleClick}
      >
        {number}
      </button>
    )
  })

  const onSubmit = async () => {
    setDisableNext(true)
    setDisableSubmit(true)
    if (currentPage !== pages.length) {
      setCurrentPage(currentPage + 1)
    }
    if (currentPage === pages.length - 1) {
      setBtn(true)
    }
  }

  const onSubmitExam = async () => {
    await handleRecordingComplete()
    let formData = new FormData()
    formData.append('linkId', linkId)
    myFile?.map((answer) => {
      formData.append('answer', answer)
    })
    dispatch(addQuizData(formData))
  }

  const handleRecordingComplete = (data) => {
    setisRecordingComplete(true)
    setDisableNext(false)
    const file = new File([data], 'answer.mp4', { type: 'video/mp4' })
    setMyFile([...myFile, file])
  }

  return (
    <>
      <div className="p-1">
        <CCard className="border-0" style={{ width: '100%' }}>
          <div className="main_list border-0">
            <h1 className="quiz_heading border-0  p-3 pb-4">
              Welcome to the quiz
              <hr />
            </h1>
            <div>
              <div className="quiz-inside">
                <div className="user">
                  <div className="user1">
                    <ul className="Question-ul">
                      <div className="stepper_container">
                        <Stepper
                          steps={renderPageNumbers}
                          activeStep={currentPage - 1}
                          showNumber={false}
                          activeColor="darkblue"
                          activeBorderStyle="solid"
                          completeBorderStyle="solid"
                          completeColor="blue"
                        />
                      </div>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="last_div">
                    <div className="instructions">
                      <CCard className="p-2" style={{ marginTop: '-8px', height: '318px' }}>
                        <div
                          className="instructions-inside"
                          style={{ width: '250px', minHeight: '300px', marginTop: '-44px' }}
                        >
                          <h2> Instructions</h2>
                          <br />
                          <p>
                            1: Please do not refresh the page for a better experience, otherwise you
                            can face an error
                          </p>
                          <p>2: Please answer to first question to go to next question</p>
                          <p>3: You can not go back to the previous question</p>
                          <p>4: Please wait for status to be recording</p>
                          <p>5: Please press stop recording before next</p>
                        </div>
                      </CCard>
                    </div>
                    <div className="lastdiv_inside">
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <h2>Question {currentPage}:</h2>
                        <h2>
                          <Paginator currentItems={currentItems} />
                        </h2>
                      </div>

                      <VideoRecorder
                        isOnInitially
                        showReplayControls
                        timeLimit={30000}
                        onRecordingComplete={handleRecordingComplete}
                        render
                      />
                      <CCard>
                        <div className="btns">
                          {btn || quizQuestions?.length === 1 ? (
                            <div className="submit-btn">
                              {loadingSubmit ? (
                                <div className="spinner-border text-light" role="status">
                                  <span className="sr-only"></span>
                                </div>
                              ) : (
                                <CButton
                                  style={{ width: '119px' }}
                                  color="primary"
                                  className="submit-btn"
                                  onClick={onSubmitExam}
                                  // disabled={disableSubmit ? false : true}
                                >
                                  Submit
                                </CButton>
                              )}
                            </div>
                          ) : (
                            <div className="submit-btn">
                              <CButton
                                style={{ width: '119px' }}
                                color="primary"
                                className="submit-btn"
                                onClick={onSubmit}
                              >
                                Next
                              </CButton>
                            </div>
                          )}
                        </div>
                      </CCard>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CCard>
      </div>
    </>
  )
}

export default Quiz
