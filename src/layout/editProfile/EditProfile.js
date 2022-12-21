import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CFormLabel,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CRow,
  CFormTextarea,
  CFormFeedback,
  CImage,
  CHeader,
} from '@coreui/react'
import { cilPencil } from '@coreui/icons'
import { AppHeader, AppSidebar } from 'src/components'
import { editUser, getUserData } from 'src/store/actions/actions'
import DefaultUser from 'src/assets/images/default_user.png'

import './EditProfile.scss'

export const blockInvalidChar = (e) => ['e', 'E', '-'].includes(e.key) && e.preventDefault()

const EditProfile = () => {
  const dispatch = useDispatch()
  const loadingEdit = useSelector((state) => state.editUser.loading)
  const incomingData = useSelector((state) => state.userData.userData)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [validated, setValidated] = useState(false)
  const [image, setImage] = useState()
  const [preview, setPreview] = useState('')

  useEffect(() => {
    dispatch(getUserData())
  }, [loadingEdit])

  useEffect(() => {
    setName(incomingData?.name)
    setEmail(incomingData?.email)
    setAddress(incomingData?.address)
    setPhone(incomingData?.phone)
    setPreview(incomingData?.image.fileUrl)
  }, [incomingData, dispatch])

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity() === false) {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('address', address)
      formData.append('phone', phone)
      formData.append('image', image)
      dispatch(editUser(formData))
    }
    setValidated(true)
  }
  const handleUpload = (e) => {
    const objectset = e.target.files[0]
    const objectUrl = URL?.createObjectURL(objectset)
    setImage(objectUrl)
    setPreview(objectUrl)
  }
  return (
    <>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <CContainer style={{ maxWidth: 700 }}>
          <CCard className="p-4 shadow-lg">
            <CHeader className="h3">Edit Profile</CHeader>
            <CCardBody className="p-4">
              <CForm
                noValidate
                onSubmit={onSubmit}
                validated={validated}
                className="needs-validation "
                encType="multipart/form-data"
              >
                <CRow>
                  <CCol xs={12} md={12} className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center">
                      <div
                        style={{
                          height: 'max-content',
                          width: 160,
                          position: 'relative',
                        }}
                      >
                        <CImage
                          rounded
                          thumbnail
                          src={preview ? preview : DefaultUser}
                          width={160}
                          height={300}
                        />
                        <div className="edit-icon-wrapper">
                          <label htmlFor="profile-img" style={{ width: 'max-content' }}>
                            <CIcon icon={cilPencil} className="edit-icon" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <input
                      type="file"
                      className="d-none"
                      onChange={handleUpload}
                      id="profile-img"
                    />
                  </CCol>
                  {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
                    <CButton onClick={() => setPreview('')} style={{ width: '140px' }}>
                      Remove profile
                    </CButton>
                  </div> */}
                </CRow>
                <CRow xs={{ gutter: 4 }}>
                  <CCol xs={12}>
                    <CRow className="mb-3">
                      <CCol xs={12}>
                        <CFormLabel htmlFor="name" className="col-form-label ">
                          Name
                        </CFormLabel>
                        <CFormInput
                          required
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <CFormFeedback invalid>Please enter a valid username</CFormFeedback>
                      </CCol>
                      <CCol xs={12}>
                        <CFormLabel htmlFor="email" className="col-form-label">
                          Email
                        </CFormLabel>
                        <CFormInput
                          required
                          id="email"
                          type="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <CFormFeedback invalid>Please enter a valid email</CFormFeedback>
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CCol xs={12}>
                        <CFormLabel htmlFor="phone" className="col-form-label">
                          Phone
                        </CFormLabel>
                        <CFormInput
                          required
                          id="phone"
                          type="number"
                          value={phone}
                          onKeyDown={blockInvalidChar}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        <CFormFeedback invalid>Please enter a valid phone number</CFormFeedback>
                      </CCol>
                      <CCol xs={12}>
                        <CFormLabel htmlFor="address" className="col-form-label">
                          Address
                        </CFormLabel>
                        <CFormTextarea
                          required
                          rows={4}
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                        <CFormFeedback invalid>Please enter a valid Address</CFormFeedback>
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
                <div className="add-button">
                  {loadingEdit ? (
                    <div className="spinner-border text-light" role="status">
                      <span className="sr-only" />
                    </div>
                  ) : (
                    <CButton
                      id="submitting"
                      className="btn-primary btn-width btn-loading custom-btn"
                      type="submit"
                    >
                      Save
                    </CButton>
                  )}
                  <Link className="mx-4" to={'/dashboard'}>
                    <CButton className="btn-width" color="dark" variant="outline">
                      Cancel
                    </CButton>
                  </Link>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CContainer>
      </div>
    </>
  )
}

export default EditProfile
