/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CCardGroup, CContainer } from '@coreui/react'
import './View.scss'
import {
  CTableDataCell,
  CTable,
  CTableBody,
  CTableHeaderCell,
  CTableHead,
  CCard,
  CCardBody,
  CTableRow,
  CButton,
  CCol,
  CRow,
} from '@coreui/react'
import { AppHeader, AppSidebar } from 'src/components'

import { getResultData } from 'src/store/actions/actions'
import { Link, useLocation } from 'react-router-dom'
import Pagination from 'src/components/pagination/pagination'
const View = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const resultList = useSelector((state) => state.resultData.resultData)
  const [linkId, setLinkId] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  // Get current posts
  const indexOfLastPost = currentPage * itemsPerPage
  const indexOfFirstPost = indexOfLastPost - itemsPerPage
  const currentPosts = resultList?.slice(indexOfFirstPost, indexOfLastPost)
  const pagenumber = Math.ceil(resultList?.length / itemsPerPage)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const previousButton = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextButton = () => {
    if (pagenumber !== currentPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    if (location.state) {
      setLinkId(location.state._id)
      if (linkId) {
        dispatch(getResultData(linkId))
      }
    }
  }, [linkId])

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <CContainer>
            <CRow className="justify-content-center shadow-lg m-1">
              <CCol md={12} className="ml-1 p-0">
                <CCardGroup>
                  <CCard className="p-4">
                    <div className="addbtn">
                      <div>
                        <h2>Answers</h2>
                      </div>
                      <Link className="btn-light" to="/result">
                        <CButton className="custom-btn">Back</CButton>
                      </Link>
                    </div>
                    <hr />

                    {resultList?.length === 0 ? (
                      <CCard className="text-center align-items" style={{ height: '350px' }}>
                        <h1 style={{ marginTop: '130px' }}>Data not found!</h1>
                      </CCard>
                    ) : (
                      <CCardBody style={{ minHeight: '430px' }}>
                        <CTable
                          align="middle"
                          className="mb-0 border table shadow-sm p-3 mb-5 bg-white rounded"
                          hover
                          responsive
                        >
                          <CTableHead className="table-header">
                            <CTableRow>
                              <CTableHeaderCell className="text-white p-3">
                                Question
                              </CTableHeaderCell>
                              <CTableHeaderCell className="text-white p-3">Answer</CTableHeaderCell>
                              <CTableHeaderCell className="text-white p-3">Status</CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            {currentPosts?.map((item, index) => (
                              <CTableRow v-for="item in tableItems" key={index}>
                                <CTableDataCell>{item.questionId?.title}</CTableDataCell>

                                <CTableDataCell>
                                  <div className="answer">
                                    <video width="146px" height="146px" controls>
                                      <source
                                        src={item.answer?.fileUrl}
                                        type={item.answer?.fileType}
                                      ></source>
                                    </video>
                                  </div>
                                </CTableDataCell>

                                <CTableDataCell>
                                  <div className="status-wrapper">
                                    {item.status === 'active' ? (
                                      <>
                                        <span className="status-active" />
                                        <div className="status-active-text">ACTIVE</div>
                                      </>
                                    ) : (
                                      <>
                                        <span className="status-inactive" />
                                        <div className="status-inactive-text">INACTIVE</div>
                                      </>
                                    )}
                                  </div>
                                </CTableDataCell>
                              </CTableRow>
                            ))}
                          </CTableBody>
                        </CTable>
                      </CCardBody>
                    )}
                    <nav className="paginationBox">
                      {resultList?.length > 5 ? (
                        <Pagination
                          postsPerPage={itemsPerPage}
                          totalPosts={resultList?.length}
                          paginate={paginate}
                          previous={previousButton}
                          next={nextButton}
                        />
                      ) : null}
                    </nav>
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

export default View
