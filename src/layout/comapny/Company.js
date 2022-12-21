/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CButton } from '@coreui/react'
import { Link, useHistory } from 'react-router-dom'
import { CCardGroup, CContainer } from '@coreui/react'
import { cilDelete, cilPencil, cilPen, cilTrash } from '@coreui/icons'
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
import CIcon from '@coreui/icons-react'
import { DummyImage } from 'react-simple-placeholder-image'

import { AppHeader, AppSidebar } from 'src/components'
import Deletemodal from 'src/views/notifications/modals/deleteModal'
import './Company.scss'
import { deleteCompanyData, getCompanyData } from '../../store/actions/actions'
import Pagination from 'src/components/pagination/pagination'

const CompanyInfo = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const incomingData = useSelector((state) => state.companyData.companyData)
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

  const changeVisible = () => {
    setVisible(true)
  }
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

  const handleDelete = (companyId) => {
    dispatch(deleteCompanyData({ companyId }))
    setVisible(!visible)
    if (currentPosts?.length <= 1) {
      setCurrentPage(currentPage - 1)
      setToggle(!toggle)
    }
  }

  useEffect(() => {
    dispatch(getCompanyData())
  }, [])

  const handleEdit = (item) => {
    history.push({
      pathname: '/add',
      state: item,
    })
  }

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body">
          <CContainer fluid>
            <CRow className="justify-content-center shadow-lg m-1">
              <CCol md={12} className="ml-1 p-0">
                <CCardGroup>
                  <CCard className="p-4">
                    <div className="addbtn">
                      <div>
                        <h2>Companies</h2>
                      </div>
                      <Link className="btn-light" to="/add">
                        <CButton className="custom-btn">Add</CButton>
                      </Link>
                    </div>

                    <hr />
                    {incomingData?.length === 0 ? (
                      <CCard className="text-center" style={{ height: '350px' }}>
                        <h1 style={{ marginTop: '130px' }}>Data not found!</h1>
                      </CCard>
                    ) : (
                      <CCardBody style={{ minHeight: '277px' }} className="rounded">
                        <CTable
                          align="middle"
                          className="mb-0 border table shadow-sm p-3 mb-5 bg-white rounded"
                          hover
                          responsive
                        >
                          <CTableHead className="table-header">
                            <CTableRow>
                              <CTableHeaderCell className="text-white p-3">
                                Profile
                              </CTableHeaderCell>
                              <CTableHeaderCell className="text-white p-3">Name</CTableHeaderCell>
                              <CTableHeaderCell className="text-white p-3">Email</CTableHeaderCell>
                              <CTableHeaderCell className="text-white p-3">
                                Address
                              </CTableHeaderCell>
                              <CTableHeaderCell className="text-white p-3">
                                Contact
                              </CTableHeaderCell>
                              <CTableHeaderCell className="text-white p-3">
                                Website
                              </CTableHeaderCell>
                              <CTableHeaderCell className="text-white p-3">
                                Created
                              </CTableHeaderCell>
                              <CTableHeaderCell className="text-white p-3">
                                Actions
                              </CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            {currentPosts?.map((item, index) => {
                              return (
                                <CTableRow key={index}>
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
                                          borderRadius: '5px',
                                        }}
                                        src={item.image?.fileUrl}
                                      />
                                    )}
                                  </CTableDataCell>
                                  <CTableDataCell>{item.companyId?.companyName}</CTableDataCell>
                                  <CTableDataCell>{item.companyId?.companyEmail}</CTableDataCell>
                                  <CTableDataCell>{item.companyId?.companyAddress}</CTableDataCell>
                                  <CTableDataCell>{item.companyId?.companyPhone}</CTableDataCell>
                                  <CTableDataCell>{item.companyId?.companyWebsite}</CTableDataCell>
                                  <CTableDataCell>
                                    {item.companyId?.createdAt?.slice(0, 10)}
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
                                        flexDirection: 'row',
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
                                          setVisible(!visible), setDeleteId(item.companyId?._id)
                                        }}
                                      >
                                        <CIcon icon={cilTrash} className="action-icon" />
                                      </CButton>
                                      <Deletemodal
                                        visible={visible}
                                        message="Are you sure, you want to delete!"
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

export default CompanyInfo
