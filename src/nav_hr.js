/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCalculator,
  cilExternalLink,
  cilListHighPriority,
  cilListNumbered,
  cilMediaStop,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const nav_hr = [
  {
    component: CNavTitle,
    name: 'HR',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilMediaStop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Exam Type',
    to: '/examtype',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Question',
    to: '/question',
    icon: <CIcon icon={cilListNumbered} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Generate Exam',
    to: '/generatelink',
    icon: <CIcon icon={cilExternalLink} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Result',
    to: '/result',
    icon: <CIcon icon={cilListHighPriority} customClassName="nav-icon" />,
  },
]

export default nav_hr
