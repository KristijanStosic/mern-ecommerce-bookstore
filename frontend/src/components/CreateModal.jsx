import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeCreateModal } from '../redux/modal/modalSlice'
import Modal from 'react-bootstrap/Modal'
import CreateCPGForm from './admin/categories/CreateCPGForm'

const CreateModal = ({ type }) => {
  const dispatch = useDispatch()

  const { isOpenCreateModal } = useSelector((state) => state.modal)

  return (
    <Modal
      show={isOpenCreateModal}
      onHide={() => dispatch(closeCreateModal())}
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Create {type}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateCPGForm type={type} />
      </Modal.Body>
      <Modal.Footer>
        <button
          className='btn btn-secondary'
          onClick={() => dispatch(closeCreateModal())}
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateModal
