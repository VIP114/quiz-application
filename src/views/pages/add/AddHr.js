import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import './Add.scss'
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
} from '@coreui/react'
import { AppHeader, AppSidebar } from 'src/components'
import { addHrData, editHrData } from '../../../store/actions/actions'
import { useEffect } from 'react'
import CIcon from '@coreui/icons-react'
import { cilPencil } from '@coreui/icons'
import { DummyImage } from 'react-simple-placeholder-image'

export const blockInvalidChar = (e) => ['e', 'E', '-'].includes(e.key) && e.preventDefault()

const AddHr = (props) => {
  const dispatch = useDispatch()
  const location = useLocation()

  const companyDetails = useSelector((state) => state.user.data)
  const loadingAdd = useSelector((state) => state.addHrData.loading)
  const loadingEdit = useSelector((state) => state.editHrData.loading)
  const [userId, setUserId] = useState('')
  const [companyId, setCompanyId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [validated, setValidated] = useState(false)
  const [companyName, setCompanyName] = useState('')
  const [companyEmail, setCompanyEmail] = useState('')
  const [companyAddress, setCompanyAddress] = useState('')
  const [companyWebsite, setCompanyWebsite] = useState('')
  const [companyPhone, setCompanyPhone] = useState('')
  const [disable, setDisable] = useState(false)
  const [image, setImage] = useState()
  const [preview, setPreview] = useState('')

  useEffect(() => {
    setCompanyName(window.localStorage.getItem('companyName'))
    setCompanyEmail(window.localStorage.getItem('companyEmail'))
    setCompanyAddress(window.localStorage.getItem('companyAddress'))
    setCompanyWebsite(window.localStorage.getItem('companyWebsite'))
    setCompanyPhone(window.localStorage.getItem('companyPhone'))
  }, [])

  useEffect(() => {
    if (location.state) {
      setDisable(true)
      const userValues = location.state.companyId
      setName(location.state.name)
      setEmail(location.state.email)
      setAddress(location.state.address)
      setPhone(location.state.phone)
      setPreview(location.state.image?.fileUrl)
      setUserId(location.state._id)
      setCompanyId(userValues._id)
      setCompanyName(userValues.companyName)
      setCompanyEmail(userValues.companyEmail)
      setCompanyAddress(userValues.companyAddress)
      setCompanyWebsite(userValues.companyWebsite)
      setCompanyPhone(userValues.companyPhone)
    } else {
      if (companyDetails) {
        setCompanyName(companyDetails.companyId.companyName)
        setCompanyEmail(companyDetails.companyId.companyEmail)
        setCompanyAddress(companyDetails.companyId.companyAddress)
        setCompanyWebsite(companyDetails.companyId.companyWebsite)
        setCompanyPhone(companyDetails.companyId.companyPhone)
      }
    }
  }, [companyDetails])

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity() === false) {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('address', address)
      formData.append('phone', phone)
      formData.append('companyName', companyName)
      // formData.append('companyEmail', companyEmail)
      formData.append('companyAddress', companyAddress)
      formData.append('companyPhone', companyPhone)
      formData.append('companyWebsite', companyWebsite)
      formData.append('image', image)

      dispatch(addHrData(formData))
    }
    setValidated(true)
  }
  const onUpdate = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity() === false) {
      const formData = new FormData()
      formData.append('userId', userId)
      formData.append('companyId', companyId)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('address', address)
      formData.append('phone', phone)
      formData.append('companyName', companyName)
      formData.append('companyEmail', companyEmail)
      formData.append('companyAddress', companyAddress)
      formData.append('companyPhone', companyPhone)
      formData.append('companyWebsite', companyWebsite)
      formData.append('image', image)

      dispatch(editHrData(formData))
    }
    setValidated(true)
  }
  const handleUpload = (e) => {
    const objectset = e.target.files[0]
    const objectUrl = URL?.createObjectURL(objectset)
    setPreview(objectUrl)
    setImage(objectUrl)
  }

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="bg-light">
          <CForm
            className="needs-validation"
            encType="multipart/form-data"
            noValidate
            validated={validated}
            onSubmit={location.state ? onUpdate : onSubmit}
          >
            <CContainer fluid>
              <CRow className="shadow-lg m-1">
                <CCol md={12} className="ml-1 p-0">
                  <CCard>
                    <CCardBody className="p-4">
                      {location.state ? (
                        <h3 className="text-left">Update HR Details</h3>
                      ) : (
                        <h3 className="text-left">Add HR Details</h3>
                      )}
                      <hr />
                      <div className="fw-medium">
                        <h5>Fill admin details :</h5>
                      </div>
                      <br />
                      <CRow>
                        <CCol
                          className="imagepreview-div"
                          style={{
                            display: 'flex',
                            maxWidth: '20%',
                            justifyContent: 'flex-end',
                          }}
                        >
                          <CFormLabel htmlFor="profileImage" className="col-sm-2 col-form-label">
                            <div className="imagePreview">
                              {preview === '' ? (
                                <DummyImage
                                  style={{
                                    marginLeft: '17px',
                                    marginBottom: '-3px',
                                    borderRadius: '5px',
                                  }}
                                  width={190}
                                  height={190}
                                  shape="avatar"
                                />
                              ) : (
                                <CImage
                                  style={{
                                    marginLeft: '17px',
                                    marginBottom: '-3px',
                                    borderRadius: '5px',
                                  }}
                                  className="rounded border-0 d-flex flex-column align-items-center image"
                                  width="190px"
                                  height="190px"
                                  src={preview}
                                />
                              )}
                              <div className="text-center para-and-icon">
                                <CIcon
                                  style={{
                                    width: '35px',
                                    height: '35px',
                                    padding: '2px',
                                  }}
                                  icon={cilPencil}
                                  className="editIcon rounded"
                                />
                              </div>
                              {/* <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  marginTop: '5px',
                                  marginLeft: '-6px',
                                }}
                              >
                                <CButton
                                  onClick={() => {
                                    setImage(''), setPreview('')
                                  }}
                                  style={{ width: '140px' }}
                                >
                                  Remove profile
                                </CButton>
                              </div> */}
                            </div>
                          </CFormLabel>

                          <CFormInput
                            className="input_tag"
                            style={{ display: 'none' }}
                            onChange={(e) => {
                              setImage(e.target.files[0]), handleUpload(e)
                            }}
                            type="file"
                            id="profileImage"
                          />
                          <CFormFeedback invalid>Please enter a valid file</CFormFeedback>
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="name" className="col-sm-2 col-form-label">
                          Name
                        </CFormLabel>
                        <CCol sm={4}>
                          <CFormInput
                            onChange={(e) => setName(e.target.value)}
                            type="name"
                            id="name"
                            required
                            value={name}
                          />
                          <CFormFeedback invalid>Please enter a valid username</CFormFeedback>
                        </CCol>

                        <CFormLabel htmlFor="email" className="col-sm-2 col-form-label">
                          Email
                        </CFormLabel>
                        <CCol sm={4}>
                          <CFormInput
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            required
                            value={email}
                          />
                          <CFormFeedback invalid>Please enter a valid email</CFormFeedback>
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="phone" className="col-sm-2 col-form-label">
                          Phone
                        </CFormLabel>
                        <CCol sm={4}>
                          <CFormInput
                            type="tel"
                            id="phone"
                            onChange={(e) => setPhone(e.target.value)}
                            maxLength="10"
                            value={phone}
                            onKeyDown={blockInvalidChar}
                            required
                          />
                          {phone.length < 10 && (
                            <CFormFeedback invalid>
                              Please enter a 10 digit valid phone number
                            </CFormFeedback>
                          )}
                        </CCol>
                        <CFormLabel htmlFor="address" className="col-sm-2 col-form-label">
                          Address
                        </CFormLabel>
                        <CCol sm={4}>
                          <CFormTextarea
                            type="Address"
                            id="address"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            required
                          />
                          <CFormFeedback invalid>Please enter a valid Address</CFormFeedback>
                        </CCol>
                      </CRow>
                      <hr />
                      <div className="fw-medium">
                        <h5>Company Details :</h5>
                        <br />
                      </div>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="companyName" className="col-sm-2 col-form-label">
                          Company Name
                        </CFormLabel>
                        <CCol sm={4}>
                          <CFormInput
                            onChange={(e) => setCompanyName(e.target.value)}
                            value={companyName}
                            type="name"
                            id="companyName"
                            disabled={!disable ? true : true}
                            required
                          />
                        </CCol>

                        <CFormLabel htmlFor="companyEmail" className="col-sm-2 col-form-label">
                          Company Email
                        </CFormLabel>
                        <CCol sm={4}>
                          <CFormInput
                            onChange={(e) => setCompanyEmail(e.target.value)}
                            value={companyEmail}
                            name="companyEmail"
                            id="companyEmail"
                            type="email"
                            required
                            disabled={!disable ? true : true}
                          />
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="companyPhone" className="col-sm-2 col-form-label">
                          Company Contact
                        </CFormLabel>
                        <CCol sm={4}>
                          <CFormInput
                            type="number"
                            id="companyPhone"
                            onChange={(e) => setCompanyPhone(e.target.value)}
                            value={companyPhone}
                            required
                            disabled={!disable ? true : true}
                          />
                        </CCol>
                        <CFormLabel htmlFor="website" className="col-sm-2 col-form-label">
                          Company Website
                        </CFormLabel>
                        <CCol sm={4}>
                          <CFormInput
                            value={companyWebsite}
                            type="text"
                            id="website"
                            onChange={(e) => setCompanyWebsite(e.target.value)}
                            required
                            disabled={!disable ? true : true}
                          />
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="companyAddress" className="col-sm-2 col-form-label">
                          Company Address
                        </CFormLabel>
                        <CCol sm={4}>
                          <CFormTextarea
                            value={companyAddress}
                            type="Address"
                            required
                            id="companyAddress"
                            onChange={(e) => setCompanyAddress(e.target.value)}
                            disabled={!disable ? true : true}
                          />
                        </CCol>
                      </CRow>
                      <br />
                      {location.state ? (
                        <div className="add-button">
                          {loadingEdit ? (
                            <div className="spinner-border text-light" role="status">
                              <span className="sr-only"></span>
                            </div>
                          ) : (
                            <CButton id="onUpdate" className="custom-btn btn-width" type="submit">
                              Update
                            </CButton>
                          )}
                          <Link className="mx-4" to={'/hr'}>
                            <CButton className="btn-width custom-btn-outline">Cancel</CButton>
                          </Link>
                        </div>
                      ) : (
                        <div className="add-button">
                          {loadingAdd ? (
                            <div className="spinner-border text-light" role="status">
                              <span className="sr-only"></span>
                            </div>
                          ) : (
                            <CButton id="submitting" className="custom-btn btn-width" type="submit">
                              Add
                            </CButton>
                          )}
                          <Link className="mx-4" to={'/hr'}>
                            <CButton className="btn-width custom-btn-outline">Cancel</CButton>
                          </Link>
                        </div>
                      )}
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CContainer>
          </CForm>
        </div>
      </div>
    </div>
  )
}

export default AddHr
