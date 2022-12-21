/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilInfo,
  cilList,
  cilMediaStop,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const nav_company = [
  {
    component: CNavTitle,
    name: 'Company',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilMediaStop} customClassName="nav-icon" />,
  },
]

export default nav_company
