/* eslint-disable react/prop-types */
import React from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

const Deletemodal = (props) => {
  return (
    <>
      <CModal visible={!props.visible} onClose={props.setFalse}>
        <CModalHeader>
          <CModalTitle>Confirmation</CModalTitle>
        </CModalHeader>
        <CModalBody>{props.message}</CModalBody>
        <CModalFooter>
          <CButton color="secondary text-light" onClick={props.setFalse}>
            No
          </CButton>

          <CButton color="danger text-light" onClick={props.handleDelete}>
            Yes
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Deletemodal
