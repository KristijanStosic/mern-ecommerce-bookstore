import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeDeleteModal, openDeleteModal, closeUpdateModal, openUpdateModal } from '../../../redux/modal/modalSlice'
import { deletePublisher } from '../../../redux/publishers/publisherActions'
import Modal from 'react-bootstrap/Modal'
import UpdateCPGForm from '../categories/UpdateCPGForm'

const PublisherItem = ({ publisher }) => {
  const [showUpdateDialog, setShowUpdateDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  const { isOpenUpdateModal, isOpenDeleteModal } = useSelector((state) => state.modal)

  const handleCloseUpdateDialog = () => setShowUpdateDialog(false)

  const dispatch = useDispatch()

  const deletePublisherHandler = (id) => {
    dispatch(deletePublisher(id))
    dispatch(closeDeleteModal())
  }

  return (
    <>
      <td>{publisher?.name}</td>
      <td style={{ cursor: 'pointer' }}>
          <i className='fas fa-pencil-alt text-primary' onClick={() => dispatch(openUpdateModal())}></i>
        <i className='fas fa-trash text-danger mx-3' onClick={() => dispatch(openDeleteModal())}></i>
      </td>

      <Modal show={isOpenUpdateModal} onHide={() => dispatch(closeUpdateModal())}>
        <Modal.Header closeButton>
          <Modal.Title>Update Category {publisher?.name}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateCPGForm publisherToUpdate={publisher} />
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={() => dispatch(closeUpdateModal())}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={isOpenDeleteModal} onHide={() => dispatch(closeDeleteModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Delete {publisher?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete publisher {publisher?.name} ?
      </Modal.Body>
      <Modal.Footer>
        <button
          className='btn btn-danger'
          onClick={() => dispatch(closeDeleteModal())}
        >
          No
        </button>
        <button className='btn btn-success' onClick={() => deletePublisherHandler(publisher._id)}>
          Yes
        </button>
      </Modal.Footer>
    </Modal>

    </>
  )
}

export default PublisherItem
