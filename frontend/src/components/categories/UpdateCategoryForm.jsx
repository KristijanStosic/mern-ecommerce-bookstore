import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateCategory } from '../../redux/categories/categoryActions'
import { toast } from 'react-hot-toast'

const UpdateCategoryForm = ({ handleClose, categoryToUpdate }) => {
  const [name, setName] = useState(categoryToUpdate.name)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name) return toast.error('Name is required')
    dispatch(updateCategory(categoryToUpdate._id, name))
    handleClose()
}

  return (
    <form onSubmit={handleSubmit}>
      <div className='container-fluid'>
        <label htmlFor='categoryName'>Name</label>
        <input
          className='form-control'
          name='categoryName'
          id='categoryName'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Category'
        />
        <div className='d-grid gap-2 mx-auto mt-2'>
          <button type='submit' className='btn btn-primary'>
            Update
          </button>
        </div>
      </div>
    </form>
  )
}

export default UpdateCategoryForm
