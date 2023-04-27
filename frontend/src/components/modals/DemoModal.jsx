import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeDeleteModal } from '../../redux/modal/modalSlice'
import Modal from 'react-bootstrap/Modal'

const DemoModal = ({ itemToDelete, type, deleteAction, idToDelete }) => {
    const dispatch = useDispatch()

    const { isOpenDeleteModal } = useSelector((state) => state.modal)

    const deleteHandler = () => {
        dispatch(deleteAction(idToDelete))
        dispatch(closeDeleteModal())
    }
  return (
    <Modal show={isOpenDeleteModal}  onHide={() => dispatch(closeDeleteModal())}>
        <Modal.Header closeButton>
            <Modal.Title>
                Delete {type} ?
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure {itemToDelete.name} ?
        </Modal.Body>
        <Modal.Footer>
            <button className='btn btn-danger'
            onClick={() => dispatch(closeDeleteModal())}
            >
                No
            </button>
            <button className='btn btn-success'
            onClick={() => dispatch(deleteHandler)}
            >
                Yes
            </button>
        </Modal.Footer>
    </Modal>
  )
}

export default DemoModal