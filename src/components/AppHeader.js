/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'
import { getUserData } from 'src/store/actions/actions'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.stating.sidebarShow)
  const incomingData = useSelector((state) => state.userData.userData)
  const [image, setImage] = useState('')
  const [visible, setVisible] = useState(false)
  const [role1, setRole1] = useState()
  useEffect(() => {
    setRole1(window.localStorage.getItem('role'))
  }, [])
  let history = useHistory()

  const handleLogout = () => {
    const notify = (message) => toast(message)
    notify('Logout Successful')
    history.push('/login')
    window.localStorage.setItem('userToken', '')
    dispatch({ type: 'logout' })
  }

  useEffect(() => {
    dispatch(getUserData())
  }, [])
  useEffect(() => {
    setImage(incomingData?.image.fileUrl)
  }, [incomingData])

  return (
    <CHeader position="sticky" className="mb-2">
      <CContainer fluid>
        <CHeaderToggler
          className=""
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink} active className="active">
              Dashboard
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CHeaderNav className="ms-3" onClick={handleLogout}>
              <CButton className="custom-btn-outline">Logout</CButton>
            </CHeaderNav>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
