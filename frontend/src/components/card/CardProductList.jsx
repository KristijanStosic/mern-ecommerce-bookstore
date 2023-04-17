import { lazy } from 'react'
import { Link } from 'react-router-dom'

const Rating = lazy(() => import('../Rating'))
const ReadMoreText = lazy(() => import('../ReadMoreText'))

const CardProductList = ({ product }) => {
  return (
    <div className='card'>
      <div className='row g-0'>
        <div className='col-md-3 text-center'>
          <Link to={`/product/${product._id}`}>
            <img
              src={product?.image}
              className='img-fluid'
              alt={product?.name}
            />
          </Link>
        </div>
        <div className='col-md-6'>
          <div className='card-body'>
            <h6 className='card-subtitle me-2 d-inline'>
              <Link
                to={`/product/${product._id}`}
                className='text-decoration-none'
              >
                {product?.name}
              </Link>
            </h6>
            {product.isNewProduct && (
              <span className='badge bg-success me-2'>New</span>
            )}
            {product.isHot && <span className='badge bg-danger me-2'>Hot</span>}
            <Rating
              averageRating={product?.averageRating}
              numOfReviews={product?.numOfReviews}
            />

            <ReadMoreText>{product?.description}</ReadMoreText>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card-body'>
            <div className='mb-2'>
              <span className='fw-bold h5'>${product?.price}</span>
            </div>
            <p className='text-success small mb-2'>
              <span>
                <i className='fas fa-truck'></i>
              </span>{' '}
              Free Shipping
            </p>
            <div className='btn-group d-flex' role='group'>
              <button
                type='button'
                className='btn btn-sm btn-primary'
                title='Add to cart'
              >
                <span>
                  <i className='fas fa-cart-plus'></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProductList