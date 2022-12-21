/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CButton } from '@coreui/react'
import { Link, useHistory } from 'react-router-dom'
import { CCardGroup, CContainer } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilDelete, cilPen, cilPencil, cilTrash } from '@coreui/icons'
import { CButtonGroup } from '@coreui/react'
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
import { deleteExamData, getExamTypeData } from 'src/store/actions/actions'
import Deletemodal from 'src/views/notifications/modals/deleteExam'
import Pagination from 'src/components/pagination/pagination'

import './Exam.scss'

const ExamType = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const examTypeData = useSelector((state) => state.getExamType.examTypeData)
  const loading = useSelector((state) => state.deleteExamData.loading)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [visible, setVisible] = useState(true)
  const [toggle, setToggle] = useState(false)
  const [deleteId, setDeleteId] = useState('')

  useEffect(() => {
    dispatch(getExamTypeData())
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * itemsPerPage
  const indexOfFirstPost = indexOfLastPost - itemsPerPage
  const currentPosts = examTypeData?.slice(indexOfFirstPost, indexOfLastPost)
  const pagenumber = Math.ceil(examTypeData?.length / itemsPerPage)

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

  const changeVisible = () => {
    setVisible(true)
  }

  const handleDelete = (examId) => {
    const id = { examId: examId }
    dispatch(deleteExamData(id))
    setVisible(!visible)
    if (currentPosts?.length <= 1) {
      setCurrentPage(currentPage - 1)
      setToggle(!toggle)
    }
  }

  const handleEdit = (item) => {
    history.push({
      pathname: '/addexamtype',
      state: item,
    })
  }

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1">
          <CContainer fluid>
            <CRow className="justify-content-center shadow-lg m-1">
              <CCol md={12} className="ml-1 p-0">
                <CCardGroup>
                  <CCard className="p-4">
                    <div className="addexambtn">
                      <div>
                        <h3>Exam Types</h3>
                      </div>
                      <Link to="/addexamtype">
                        <CButton className="custom-btn ">Add</CButton>
                      </Link>
                    </div>
                    <hr />
                    {currentPosts?.length === 0 ? (
                      <CCard className="text-center align-items" style={{ height: '350px' }}>
                        <h1 style={{ marginTop: '130px' }}>Data not found!</h1>
                      </CCard>
                    ) : (
                      <CCardBody style={{ minHeight: '277px' }}>
                        <CTable
                          className="border table shadow-sm p-3 mb-5 rounded"
                          align="middle"
                          responsive
                          hover
                        >
                          <CTableHead className="table-header">
                            <CTableRow>
                              <CTableHeaderCell className="text-white py-3">Title</CTableHeaderCell>
                              <CTableHeaderCell className="text-white py-3">
                                Created At
                              </CTableHeaderCell>
                              <CTableHeaderCell className="text-white py-3">
                                Status
                              </CTableHeaderCell>
                              <CTableHeaderCell className="text-white py-3">
                                Actions
                              </CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            {currentPosts?.map((item, index) => (
                              <CTableRow key={index}>
                                <CTableDataCell>
                                  <div>{item.title}</div>
                                </CTableDataCell>

                                <CTableDataCell>{item.createdAt?.slice(0, 10)}</CTableDataCell>
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
                                <CTableDataCell
                                  style={{
                                    width: '81px',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <CButtonGroup
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <CButton
                                      style={{ height: '30px' }}
                                      onClick={() => {
                                        handleEdit(item)
                                      }}
                                      size="sm"
                                      className="btn btn-light action-btn"
                                    >
                                      <CIcon icon={cilPen} className="action-icon" />
                                    </CButton>

                                    <CButton
                                      style={{ height: '30px', marginLeft: '5px' }}
                                      size="sm"
                                      className="btn btn-light action-btn"
                                      onClick={() => {
                                        setVisible(!visible), setDeleteId(item._id)
                                      }}
                                    >
                                      <CIcon icon={cilTrash} className="action-icon" />
                                    </CButton>
                                    <Deletemodal
                                      visible={visible}
                                      message="Are you sure, you want to delete!"
                                      setFalse={changeVisible}
                                      handleFunction={() => handleDelete(deleteId)}
                                    />
                                  </CButtonGroup>
                                </CTableDataCell>
                              </CTableRow>
                            ))}
                          </CTableBody>
                        </CTable>
                      </CCardBody>
                    )}

                    <nav className="paginationBox">
                      {examTypeData?.length > 5 ? (
                        <Pagination
                          postsPerPage={itemsPerPage}
                          totalPosts={examTypeData?.length}
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

export default ExamType
