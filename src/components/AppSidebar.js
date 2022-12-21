import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import nav_company from 'src/nav_company'
import nav_hr from 'src/nav_hr'

const AppSidebar = () => {
  const dispatch = useDispatch()

  const role = useSelector((state) => state.stating.role)
  const [role1, setRole1] = useState()

  const unfoldable = useSelector((state) => state.stating.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.stating.sidebarShow)

  useEffect(() => {
    setRole1(window.localStorage.getItem('role'))
  }, [])
  return (
    <>
      <CSidebar
        position="fixed"
        unfoldable={unfoldable}
        visible={sidebarShow}
        onVisibleChange={(visible) => {
          dispatch({ type: 'set', sidebarShow: visible })
        }}
      >
        <CSidebarBrand className="d-none d-md-flex" to="/">
          QUIZ APP
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            {role1 === 'super' ? <AppSidebarNav items={navigation} /> : null}
            {role1 === 'admin' ? <AppSidebarNav items={nav_company} /> : null}
            {role1 === 'hr' ? <AppSidebarNav items={nav_hr} /> : null}
          </SimpleBar>
        </CSidebarNav>
        <CSidebarToggler
          className="d-none d-lg-flex"
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebar>
    </>
  )
}

export default React.memo(AppSidebar)
