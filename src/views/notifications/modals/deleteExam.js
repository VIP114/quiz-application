/* eslint-disable react/prop-types */
import React from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

const DeleteExam = ({ handleFunction, setFalse, message, visible }) => {
  return (
    <>
      <CModal visible={!visible} onClose={setFalse}>
        <CModalHeader>
          <CModalTitle>Confirmation</CModalTitle>
        </CModalHeader>
        <CModalBody>{message}</CModalBody>
        <CModalFooter>
          <CButton color="secondary text-light" onClick={setFalse}>
            No
          </CButton>
          <CButton color="danger text-light" onClick={handleFunction}>
            Yes
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default DeleteExam
