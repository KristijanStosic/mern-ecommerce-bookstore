import React from 'react'
import Modal from 'react-bootstrap/Modal'
import UpdateProductForm from '../forms/update-forms/UpdateProductForm'

const UpdateProductModal = ({ isOpen, onClose, itemToUpdate, updateAction }) => {

  return (
    <Modal show={isOpen} onHide={() => onClose(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Update {itemToUpdate.name}?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UpdateProductForm itemToUpdate={itemToUpdate} updateAction={updateAction} onClose={onClose} />
      </Modal.Body>
      <Modal.Footer>
        <button
          className='btn btn-danger'
          onClick={() => onClose(false)}
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default UpdateProductModal
