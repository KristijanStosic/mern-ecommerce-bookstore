import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteCategory } from '../../redux/categories/categoryActions'
import Modal from 'react-bootstrap/Modal'
import UpdateCategoryForm from './UpdateCategoryForm'

const Category = ({ category }) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showUpdateDialog, setShowUpdateDialog] = useState(false)

  const handleCloseDeleteDialog = () => setShowDeleteDialog(false)
  const handleCloseUpdateDialog = () => setShowUpdateDialog(false)

  const dispatch = useDispatch()

  const deleteCategoryHandler = () => {
    dispatch(deleteCategory(category._id))
  }

  return (
    <>
      <td>{category.name}</td>
      <td style={{ cursor: 'pointer' }}>
          <i className='fas fa-pencil-alt text-primary' onClick={() => setShowUpdateDialog(true)}></i>
        <i className='fas fa-trash text-danger mx-3' onClick={() => setShowDeleteDialog(true)}></i>
      </td>

      <Modal show={showDeleteDialog} onHide={handleCloseDeleteDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Delete category</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this category?</Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={handleCloseDeleteDialog}>
            No
          </button>
          <button className='btn btn-primary' onClick={deleteCategoryHandler}>
            Yes
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUpdateDialog} onHide={handleCloseUpdateDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Update Category {category.name}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateCategoryForm handleClose={handleCloseUpdateDialog} categoryToUpdate={category} />
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={handleCloseUpdateDialog}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category
