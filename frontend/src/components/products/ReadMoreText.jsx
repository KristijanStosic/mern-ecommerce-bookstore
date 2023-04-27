import { useState } from 'react'

const ReadMoreText = ({ children }) => {
  const [readMore, setReadMore] = useState(true)
  const text = children || ''

  const toggleReadMore = () => {
    setReadMore(!readMore)
  }

  return (
    <p className='text-dark small mt-2' style={{ cursor: 'pointer'}}>
      {readMore && readMore ? text.slice(0, 300) : text}
      <span onClick={toggleReadMore} className='text-danger'>
        {readMore ? ' [...read more]' : ' [show less]'}
      </span>
    </p>
  )
}

export default ReadMoreText