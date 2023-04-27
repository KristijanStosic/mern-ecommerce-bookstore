import { useState } from 'react'
import { formatDate } from '../../../utils/utils'
import { deleteUser } from '../../../redux/users/userActions'
import UpdateProductForm from '../../../components/forms/update-forms/UpdateProductForm'
import DeleteModal from '../../modals/DeleteModal'

const UserItem = ({ user }) => {
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)

  return (
    <>
      <td className='align-middle text-wrap fw-semibold'>{user.name}</td>
      <td className='align-middle'>{user.email}</td>
      <td className='align-middle'>
        {user.isAdmin  
              ? <span className='badge bg-success me-2'><i className='fas fa-check'></i></span> 
              : <span className='badge bg-danger me-2'><i className='fas fa-times'></i></span>}
      </td>
      <td className='align-middle'>{formatDate(user.createdAt)}</td>
      <td style={{ cursor: 'pointer' }} className='align-middle'>
        <i
          className='fas fa-pencil-alt text-dark'
          onClick={() => setIsOpenUpdateModal(true)}
        ></i>
        <i 
          hidden={user.isAdmin}
          className='fas fa-trash text-danger mx-3'
          onClick={() => setIsOpenDeleteModal(true)}
        ></i>
      </td>

      {/* {isOpenUpdateModal && (
        <UpdateProductForm
          isOpen={isOpenUpdateModal}
          onClose={setIsOpenUpdateModal}
          itemToUpdate={product}
          updateAction={updateProduct}
          type='Product'
        />
      )} */}

      {isOpenDeleteModal && (
        <DeleteModal
          isOpen={isOpenDeleteModal}
          onClose={setIsOpenDeleteModal}
          deleteAction={deleteUser}
          itemToDelete={user}
        />
      )}
    </>
  )
}

export default UserItem
