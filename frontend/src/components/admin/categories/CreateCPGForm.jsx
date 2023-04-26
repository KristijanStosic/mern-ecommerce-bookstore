import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNewCategory } from '../../../redux/categories/categoryActions'
import { createNewPublisher } from '../../../redux/publishers/publisherActions'
import { toast } from 'react-hot-toast'
import { closeCreateModal } from '../../../redux/modal/modalSlice'

const CreateCPGForm = ({ type }) => {
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name) return toast.error('Name is required')

    if (type === 'Category') {
      dispatch(createNewCategory({ name }))
      dispatch(closeCreateModal())
    }

    if (type === 'Publisher') {
      dispatch(createNewPublisher({ name }))
      dispatch(closeCreateModal())
    }
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
          placeholder={type}
          autoFocus
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

export default CreateCPGForm
