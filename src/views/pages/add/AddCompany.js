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
import { addCompanyData, editCompanyData } from '../../../store/actions/actions'
import { useEffect } from 'react'
import CIcon from '@coreui/icons-react'
import { cilPencil } from '@coreui/icons'
import { DummyImage } from 'react-simple-placeholder-image'

export const blockInvalidChar = (e) => ['e', 'E', '-'].includes(e.key) && e.preventDefault()

const AddCompany = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const loadingAdd = useSelector((state) => state.addCompanyData.loading)
  const loadingEdit = useSelector((state) => state.editCompanyDataReducer.loading)
  const [companyId, setCompanyId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [userId, setUserId] = useState('')
  const [isTrue, setIstrue] = useState(false)
  const [validated, setValidated] = useState(false)
  const [companyName, setCompanyName] = useState('')
  const [companyEmail, setCompanyEmail] = useState('')
  const [companyAddress, setCompanyAddress] = useState('')
  const [companyWebsite, setCompanyWebsite] = useState('')
  const [companyPhone, setCompanyPhone] = useState('')
  const [image, setImage] = useState()
  const [preview, setPreview] = useState('')

  useEffect(() => {
    if (location.state) {
      const userValues = location.state.companyId
      setUserId(location.state?._id)
      setName(location.state?.name)
      setEmail(location.state?.email)
      setPhone(location.state?.phone)
      setAddress(location.state?.address)
      setPreview(location.state.image?.fileUrl)
      setCompanyId(userValues?._id)
      setCompanyName(userValues?.companyName)
      setCompanyEmail(userValues?.companyEmail)
      setCompanyAddress(userValues?.companyAddress)
      setCompanyWebsite(userValues?.companyWebsite)
      setCompanyPhone(userValues?.companyPhone)
    }
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity() === false) {
      const formData = new FormData()
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
      dispatch(addCompanyData(formData))
    }
    setValidated(true)
  }
  const onUpdate = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity() === false) {
      setIstrue(true)
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

      dispatch(editCompanyData(formData))
    }
    setValidated(true)
  }

  const handleUpload = (e) => {
    const objectset = e.target.files[0]
    const objectUrl = URL?.createObjectURL(objectset)
    setPreview(objectUrl)
  }
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="bg-light">
          <CForm
            encType="multipart/form-data"
            className="needs-validation "
            noValidate
            validated={validated}
            onSubmit={location.state ? onUpdate : onSubmit}
          >
            <CContainer fluid>
              <CRow className="justify-content-center">
                <CCol md={12}>
                  <CCard>
                    <CCardBody className="p-4">
                      {location.state ? (
                        <h3 className="text-start">Update Company Details</h3>
                      ) : (
                        <h3 className="text-start">Add Company Details</h3>
                      )}
                      <hr />
                      <div className="fw-medium">
                        <h5>Fill company admin details :</h5>
                        <br />
                      </div>
                      <CRow>
                        <CCol
                          className="imagepreview-div"
                          sm={4}
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
                                    marginLeft: '18px',
                                    marginBottom: '-3px',
                                    borderRadius: '5px',
                                  }}
                                  className="rounded border-0 d-flex flex-column align-items-center image"
                                  width="190px"
                                  height="190px"
                                  src={preview}
                                />
                              )}

                              <div className="text-center para-and-icons">
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
                            value={name}
                            required
                          />
                          <CFormFeedback invalid>Please enter a valid username</CFormFeedback>
                        </CCol>

                        <CFormLabel htmlFor="email" className="col-sm-2 col-form-label">
                          Email
                        </CFormLabel>
                        <CCol sm={4}>
                          <CFormInput
                            onChange={(e) => setEmail(e.target.value)}
                            type="Email"
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
                            minLength="10"
                            value={phone}
                            onKeyDown={blockInvalidChar}
                            // pattern="\\A[0-9]{10}\\z"
                            required
                          />
                          {phone.length < 10 && (
                            <CFormFeedback invalid>Please enter a valid phone number</CFormFeedback>
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
                            required
                            value={address}
                          />
                          <CFormFeedback invalid>Please enter a valid Address</CFormFeedback>
                        </CCol>
                      </CRow>
                      <br />
                      <hr />
                      <div className="fw-medium">
                        <h5>Fill company details :</h5>
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
                            required
                            id="companyName"
                          />
                          <CFormFeedback invalid>Please enter a valid name</CFormFeedback>
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
                            required
                            type="email"
                          />
                          <CFormFeedback invalid>Please enter a valid Email</CFormFeedback>
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="companyPhone" className="col-sm-2 col-form-label">
                          Company Contact
                        </CFormLabel>
                        <CCol sm={4}>
                          <CFormInput
                            id="companyPhone"
                            onChange={(e) => setCompanyPhone(e.target.value)}
                            required
                            value={companyPhone}
                          />
                          <CFormFeedback invalid>Please enter a valid phone number</CFormFeedback>
                        </CCol>
                        <CFormLabel htmlFor="website" className="col-sm-2 col-form-label">
                          Company Website
                        </CFormLabel>
                        <CCol sm={4}>
                          <CFormInput
                            value={companyWebsite}
                            type="text"
                            id="website"
                            required
                            onChange={(e) => setCompanyWebsite(e.target.value)}
                          />
                          <CFormFeedback invalid>Please enter a valid web address</CFormFeedback>
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
                            id="companyAddress"
                            onChange={(e) => setCompanyAddress(e.target.value)}
                            required
                          />
                          <CFormFeedback invalid>Please enter a valid address </CFormFeedback>
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
                            <CButton id="onUpdate" className="btn-dark btn-width" type="submit">
                              Update
                            </CButton>
                          )}
                          <Link className="mx-4" to={'/company'}>
                            <CButton className="btn-dark btn-width">Cancel</CButton>
                          </Link>
                        </div>
                      ) : (
                        <div className="add-button">
                          {loadingAdd ? (
                            <div className="spinner-border text-light" role="status">
                              <span className="sr-only"></span>
                            </div>
                          ) : (
                            <CButton id="submitting" className="btn-dark btn-width" type="submit">
                              Add
                            </CButton>
                          )}
                          <Link className="mx-4" to={'/company'}>
                            <CButton className="btn-dark btn-width">Cancel</CButton>
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

export default AddCompany
