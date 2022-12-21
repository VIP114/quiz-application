/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CButton } from '@coreui/react'
import { useHistory } from 'react-router-dom'
import { CCardGroup, CContainer } from '@coreui/react'
import './Result.scss'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { AppHeader, AppSidebar } from 'src/components'
import { getLinkData } from 'src/store/actions/actions'
import Pagination from 'src/components/pagination/pagination'

const Result = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const linkData = useSelector((state) => state.linkData.linkData)
  const [assign, setAssign] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [offset, setOffset] = useState(1)
  const [resultData, setResultData] = useState([])

  // Get current posts
  const indexOfLastPost = currentPage * itemsPerPage
  const indexOfFirstPost = indexOfLastPost - itemsPerPage
  const currentPosts = linkData?.slice(indexOfFirstPost, indexOfLastPost)
  const pagenumber = Math.ceil(linkData?.length / itemsPerPage)

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
    dispatch(getLinkData())
  }, [currentPage, offset])

  const handleView = (item) => {
    history.push({
      pathname: '/view',
      state: item,
    })
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected
    const offset = selectedPage + 1
    setOffset(offset)
  }

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol>
                <CCardGroup>
                  <CCard className="p-4 shadow-lg">
                    <div>
                      <h3>Results</h3>
                    </div>
                    <hr />

                    {linkData?.length === 0 ? (
                      <CCard className="text-center align-items" style={{ height: '350px' }}>
                        <h1 style={{ marginTop: '130px' }}>Data not found!</h1>
                      </CCard>
                    ) : (
                      <CCardBody style={{ minHeight: '277px' }}>
                        <CTable
                          align="middle"
                          className="mb-0 border table shadow-sm p-3 mb-5 bg-white rounded"
                          hover
                          responsive
                        >
                          <CTableHead className="table-header">
                            <CTableRow>
                              <CTableHeaderCell className="text-white p-3">
                                User Email
                              </CTableHeaderCell>
                              <CTableHeaderCell className="text-white p-3">
                                Created By
                              </CTableHeaderCell>
                              <CTableHeaderCell className="text-white p-3">Status</CTableHeaderCell>
                              <CTableHeaderCell className="text-white p-3">Action</CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            {currentPosts?.map((item, index) => (
                              <CTableRow v-for="item in tableItems" key={index}>
                                <CTableDataCell>{item.userEmail}</CTableDataCell>
                                <CTableDataCell>{item.createdBy.email}</CTableDataCell>
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
                                <CTableDataCell>
                                  <div>
                                    <CButton
                                      onClick={() => handleView(item)}
                                      className="custom-btn"
                                      size="sm"
                                    >
                                      View
                                    </CButton>
                                  </div>
                                </CTableDataCell>
                              </CTableRow>
                            ))}
                          </CTableBody>
                        </CTable>
                      </CCardBody>
                    )}
                    <nav className="paginationBox">
                      {linkData?.length > 5 ? (
                        <Pagination
                          postsPerPage={itemsPerPage}
                          totalPosts={linkData?.length}
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

export default Result
