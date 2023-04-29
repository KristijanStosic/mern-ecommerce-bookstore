import { useState } from 'react'
import ReadMoreText from '../../../components/products/ReadMoreText'
import DeleteModal from '../../modals/DeleteModal'
import { deleteReview } from '../../../redux/reviews/reviewActions'
import { formatDate } from '../../../utils/utils'

const ReviewItem = ({ review }) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)

  return (
    <>
      <td className='align-middle text-wrap fw-semibold'><ReadMoreText>{review.title}</ReadMoreText></td>
      <td className='align-middle'><ReadMoreText>{review.comment}</ReadMoreText></td>
      <td className='align-middle'><strong>{review.rating}</strong></td>
      <td className='align-middle'>{review.product.name}</td>
      <td className='align-middle'>{review.user.name}</td>
      <td className='align-middle'>{formatDate(review.createdAt)}</td>
      <td style={{ cursor: 'pointer' }} className='align-middle'>
        <i 
          className='fas fa-trash text-danger mx-3'
          onClick={() => setIsOpenDeleteModal(true)}
        ></i>
      </td>

      {isOpenDeleteModal && (
        <DeleteModal
          isOpen={isOpenDeleteModal}
          onClose={setIsOpenDeleteModal}
          deleteAction={deleteReview}
          itemToDelete={review}
        />
      )}
    </>
  )
}

export default ReviewItem
