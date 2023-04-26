import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { closeUpdateModal } from '../../../redux/modal/modalSlice'
import UpdateCPGForm from './UpdateCPGForm'

const UpdateModal = ({ itemToUpdate, updateAction }) => {
  const dispatch = useDispatch()
  const { isOpenUpdateModal } = useSelector((state) => state.modal)

  return (
    <Modal show={isOpenUpdateModal} onHide={() => dispatch(closeUpdateModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Update Category {itemToUpdate.name}?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UpdateCPGForm itemToUpdate={itemToUpdate} updateAction={updateAction} />
      </Modal.Body>
      <Modal.Footer>
        <button
          className='btn btn-secondary'
          onClick={() => dispatch(closeUpdateModal())}
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default UpdateModal
