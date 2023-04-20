import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNewCategory } from '../../redux/categories/categoryActions'
import { toast } from 'react-hot-toast'

const CreateCategoryForm = ({ handleClose }) => {
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name) return toast.error('Name is required')
    dispatch(createNewCategory({ name }))
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
            Create
          </button>
        </div>
      </div>
    </form>
  )
}

export default CreateCategoryForm
