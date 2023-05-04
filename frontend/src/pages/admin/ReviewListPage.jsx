import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllReviews } from '../../redux/reviews/reviewActions'
import Spinner from '../../components/Spinner'
import Sidebar from '../../components/admin/Sidebar'
import Alert from '../../components/Alert'
import ReviewItem from '../../components/admin/reviews/ReviewItem'

const ReviewListPage = () => {
  const { reviews, loading, error } = useSelector((state) => state.reviews)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllReviews())
  }, [dispatch])

  if (loading) return <Spinner />

  return (
    <>
      <div className='row m-0'>
        <div className='col-12 col-md-2 p-0'>
          <Sidebar />
        </div>
        <div className='col-12 col-md-10'>
          <>
            <div className='mt-3'>
              {error && <Alert type='danger'>{error}</Alert>}
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-start align-items-center'>
                <h1 className='text-dark'>All Reviews</h1>
              </div>
            </div>
            <div className='row'>
              {reviews &&
                reviews?.map((review, index) => (
                  <div key={index} className='col-md-4 mb-3'>
                    <ReviewItem review={review} />
                  </div>
                ))}
            </div>
          </>
        </div>
      </div>
    </>
  )
}

export default ReviewListPage
