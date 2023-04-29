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
              <div className="d-flex justify-content-start align-items-center">
                <h1 className='text-dark'>All Reviews</h1>
              </div>
            </div>
            <table className='table table-striped table-image table-bordered table-hover border'>
              <thead className='table-dark text-center'>
                <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>Title</th>
                  <th scope='col'>Comment</th>
                  <th scope='col'>Rating</th>
                  <th scope='col'>Product</th>
                  <th scope='col'>User</th>
                  <th scope='col'>Created</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {reviews &&
                  reviews?.map((review, index) => (
                    <tr key={review._id} className='text-center'>
                      <th scope='row' className='align-middle text-center'>{index + 1}</th>
                      <ReviewItem review={review} />
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        </div>
      </div>
    </>
  )
}

export default ReviewListPage
