/* eslint-disable react/prop-types */
import React from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilLockLocked, cilPencil } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import history from 'src/utils/history'
import { DummyImage } from 'react-simple-placeholder-image'

const AppHeaderDropdown = (props) => {
  const handleRoute = () => {
    history.push('/editprofile')
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        {props.image === undefined || props.image === '' ? (
          <DummyImage width={50} height={50} style={{ borderRadius: '5px' }} shape="avatar" />
        ) : (
          <img
            src={props.image}
            size="lg"
            style={{ width: '50px', height: '50px', borderRadius: '5px' }}
          />
        )}
      </CDropdownToggle>
      <CDropdownMenu className="pt-0 mt-2" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem onClick={handleRoute}>
          <CIcon icon={cilPencil} className="me-2" />
          Edit Profile
        </CDropdownItem>
        <CDropdownItem onClick={props.handleLogout}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
