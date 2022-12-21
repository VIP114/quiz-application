/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CIcon from '@coreui/icons-react'
import { Link, useHistory } from 'react-router-dom'
import { cilPen, cilTrash } from '@coreui/icons'
import {
  CButton,
  CCardGroup,
  CContainer,
  CButtonGroup,
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
import { DummyImage } from 'react-simple-placeholder-image'

import Deletemodal from 'src/views/notifications/modals/deleteModal'
import { deleteHrData, gethRData } from '../../store/actions/actions'
import Pagination from 'src/components/pagination/pagination'
import './HR.scss'

const HR = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const incomingData = useSelector((state) => state.hrDataReducer.hrData)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [visible, setVisible] = useState(true)
  const [toggle, setToggle] = useState(false)
  const [deleteId, setDeleteId] = useState('')

  // Get current posts
  const indexOfLastPost = currentPage * itemsPerPage
  const indexOfFirstPost = indexOfLastPost - itemsPerPage
  const currentPosts = incomingData?.slice(indexOfFirstPost, indexOfLastPost)
  const pagenumber = Math.ceil(incomingData?.length / itemsPerPage)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    dispatch(gethRData())
  }, [])

  const previousButton = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextButton = () => {
    if (pagenumber !== currentPage) setCurrentPage(currentPage + 1)
  }

  const changeVisible = () => setVisible(true)

  const handleDelete = (userId) => {
    const id = { userId }
    dispatch(deleteHrData(id))
    setVisible(!visible)
    if (currentPosts?.length <= 1) {
      setCurrentPage(currentPage - 1)
      setToggle(!toggle)
    }
  }

  const handleEdit = (item) => history.push({ pathname: '/addhr', state: item })

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 ">
          <CContainer fluid>
            <CRow className="justify-content-center shadow-lg m-1">
              <CCol md={12} className="ml-1 p-0">
                <CCardGroup>
                  <CCard className="p-4">
                    <div className="addhrbtn">
                      <div>
                        <h2>HRs</h2>
                      </div>
                      <Link className="btn-dark" to="/addhr">
                        <CButton className="custom-btn">Add</CButton>
                      </Link>
                    </div>
                    <hr />

                    {incomingData?.length === 0 ? (
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
                              <CTableHeaderCell className="text-white py-3">
                                Profile
                              </CTableHeaderCell>
                              <CTableHeaderCell className="text-white py-3"> Name</CTableHeaderCell>
                              <CTableHeaderCell className="text-white py-3">Email</CTableHeaderCell>
                              <CTableHeaderCell className="text-white py-3">
                                Address
                              </CTableHeaderCell>
                              <CTableHeaderCell className="text-white py-3">
                                Contact
                              </CTableHeaderCell>
                              <CTableHeaderCell className="text-white py-3">
                                Actions
                              </CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            {currentPosts?.map((item, index) => {
                              return (
                                <CTableRow v-for="item in tableItems" key={index}>
                                  <CTableDataCell>
                                    {item.image?.fileUrl === '' ? (
                                      <DummyImage
                                        width={50}
                                        height={50}
                                        style={{ borderRadius: '5px' }}
                                        shape="avatar"
                                      />
                                    ) : (
                                      <img
                                        style={{
                                          width: '50px',
                                          height: '50px',
                                          borderRadius: '50px',
                                        }}
                                        src={item.image?.fileUrl}
                                      />
                                    )}
                                  </CTableDataCell>
                                  <CTableDataCell>{item.name}</CTableDataCell>
                                  <CTableDataCell>
                                    <div>{item.email}</div>
                                  </CTableDataCell>
                                  <CTableDataCell size="sm">{item.address}</CTableDataCell>
                                  <CTableDataCell>{item.phone}</CTableDataCell>

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
                                        setFalse={changeVisible}
                                        handleDelete={() => handleDelete(deleteId)}
                                      />
                                    </CButtonGroup>
                                  </CTableDataCell>
                                </CTableRow>
                              )
                            })}
                          </CTableBody>
                        </CTable>
                      </CCardBody>
                    )}
                    <nav className="paginationBox">
                      {incomingData?.length > 5 ? (
                        <Pagination
                          postsPerPage={itemsPerPage}
                          totalPosts={incomingData?.length}
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

export default HR
