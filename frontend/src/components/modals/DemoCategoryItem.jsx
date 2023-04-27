import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openDeleteModal, openUpdateModal } from '../../redux/modal/modalSlice'
import { deleteCategory } from '../../redux/categories/categoryActions'
import DemoModal from './DemoModal'

const DemoCategoryItem = ({ category }) => {
  const dispatch = useDispatch()

  const { isOpenDeleteModal } = useSelector((state) => state.modal)
  return (
    <>
      <td>{category.name}</td>
      <td>
        <button onClick={() => dispatch(openUpdateModal())}>Update</button>
        <button onClick={() => dispatch(openDeleteModal())}>Delete</button>
      </td>

      {isOpenDeleteModal && (
        <DemoModal
          idToDelete={category._id}
          deleteAction={deleteCategory}
          itemToDelete={category}
          type='category'
        />
      )}
    </>
  )
}

export default DemoCategoryItem
