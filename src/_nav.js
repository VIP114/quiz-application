import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilMediaStop, cilStar } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'QUIZ',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilMediaStop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Company',
    to: '/company',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
]

export default _nav
