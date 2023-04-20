import { lazy } from 'react'
import { Link } from 'react-router-dom'

const Rating = lazy(() => import('./Rating'))

const CardProductGrid = ({ product }) => {
  return (
    <div className='card'>
      <Link to={`/product/${product._id}`}><img src={product?.image} className='card-img-top' alt={product.name} /></Link>
      {product.isNewProduct && (
        <span className='badge bg-success position-absolute mt-2 ms-2'>
          New
        </span>
      )}
      <div className='card-body'>
        <h6 className='card-subtitle mb-2'>
          <Link to={`/product/${product._id}`} className='text-decoration-none'>
            {product.name}
          </Link>
        </h6>
        <div className='my-2'>
          <span className='fw-bold h5'>${product.price}</span>
            <Rating averageRating={product.averageRating} numOfReviews={product.numOfReviews} />
        </div>
        <div className='btn-group  d-flex' role='group'>
          <button
            type='button'
            className='btn btn-sm btn-primary'
            title='Add to cart'
            disabled={product.countInStock <= 0}
          >
            <span><i className='fas fa-cart-plus'> </i></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardProductGrid
