import { Link } from 'react-router-dom'
import Rating from './Rating'

const CardProductGrid = ({ product }) => {
  return (
    <div className='card'>
      <Link to={`/product/${product._id}`}>
        <img src={product?.image} className='card-img-top' alt={product.name} style={{ width: '100%', height: '25vw', objectFit: 'cover'}} />
      </Link>
      {product.isNewProduct && (
        <span className='badge bg-success position-absolute mt-2 ms-2'>
          New
        </span>
      )}
      <div className='card-body'>
          <Link to={`/product/${product._id}`} className='text-decoration-none'>
            <h5 className='card-title text-dark'>{product.name}</h5>
          </Link>
        <div className='my-2'>
          <span className='fw-bold h5'>${product.price}</span>
            <Rating averageRating={product.averageRating} numOfReviews={product.numOfReviews} />
        </div>
        <div className='btn-group d-grid' role='group'>
          <button
            type='button'
            className='btn btn-primary'
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
