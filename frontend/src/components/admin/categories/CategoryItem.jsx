import { useDispatch, useSelector } from 'react-redux'
import {
  openDeleteModal,
  openUpdateModal,
} from '../../../redux/modal/modalSlice'
import DeleteModal from '../../modals/DeleteModal'
import {
  deleteCategory,
  updateCategory,
} from '../../../redux/categories/categoryActions'
import UpdateModal from './UpdateModal'
import { useState } from 'react'

const CategoryItem = ({ category }) => {
  const dispatch = useDispatch()
  const [deleteData, setDeleteData] = useState({})

  const { isOpenUpdateModal, isOpenDeleteModal } = useSelector(
    (state) => state.modal
  )

  return (
    <>
      <td>{category.name}</td>
      <td style={{ cursor: 'pointer' }}>
        <i
          className='fas fa-pencil-alt text-primary'
          onClick={() => dispatch(openUpdateModal())}
        ></i>
        <i
          className='fas fa-trash text-danger mx-3'
          onClick={() => {
            setDeleteData(category)
            dispatch(openDeleteModal())
          }}
        ></i>
      </td>

      {isOpenUpdateModal && (
        <UpdateModal itemToUpdate={category} updateAction={updateCategory} />
      )}

      {isOpenDeleteModal && (
        <DeleteModal
          deleteAction={deleteCategory}
          itemToDelete={deleteData}
          type='category'
        />
      )}
    </>
  )
}

export default CategoryItem
