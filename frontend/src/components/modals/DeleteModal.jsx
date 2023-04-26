import { useDispatch, useSelector } from 'react-redux'
import { closeDeleteModal } from '../../redux/modal/modalSlice'
import Modal from 'react-bootstrap/Modal'

const DeleteModal = ({ itemToDelete, type, deleteAction }) => {
  const dispatch = useDispatch()

  const { isOpenDeleteModal } = useSelector((state) => state.modal)

  const deleteHandler = () => {
    dispatch(deleteAction(itemToDelete._id))
    dispatch(closeDeleteModal())
  }

  return (
    <Modal show={isOpenDeleteModal} onHide={() => dispatch(closeDeleteModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Delete {type}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete category {itemToDelete.name} ?
      </Modal.Body>
      <Modal.Footer>
        <button
          className='btn btn-danger'
          onClick={() => dispatch(closeDeleteModal())}
        >
          No
        </button>
        <button className='btn btn-success' onClick={deleteHandler}>
          Yes
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal
