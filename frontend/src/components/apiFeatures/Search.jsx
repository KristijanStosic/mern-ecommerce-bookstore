import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [keyword, setKeyword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/products/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='search'>
      <div className='input-group'>
        <input
          id='search'
          name='search'
          type='text'
          className='form-control'
          placeholder='Search products...'
          onChange={(e) => setKeyword(e.target.value)}
        />
        <label className='visually-hidden' htmlFor='search'></label>
        <button
          className='btn btn-primary text-white'
          type='submit'
          aria-label='Search'
        >
          <span><i className='fas fa-search'></i></span>
        </button>
      </div>
    </form>
  )
}

export default Search
