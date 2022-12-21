/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCalculator,
  cilExternalLink,
  cilInfo,
  cilLink,
  cilList,
  cilListHighPriority,
  cilListNumbered,
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
  {
    component: CNavItem,
    name: 'HR List',
    to: '/hr',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Company Information',
  //   to: '/Companyinformation',
  //   icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
  // },
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

export default nav_company
