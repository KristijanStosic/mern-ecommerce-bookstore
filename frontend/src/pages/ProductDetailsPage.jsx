import { useState, useEffect } from "react"
import {  useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getProduct } from '../redux/products/productActions'
import ShippingReturns from "../components/other/ShippingReturns"
import RatingReviews from "../components/other/RatingReviews"
import Rating from "../components/Rating"
import Spinner from '../components/Spinner'
import Alert from '../components/Alert'

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const { productId } = useParams()
  const { loading, error, product } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProduct(productId))
  }, [dispatch, productId])

  console.log(product)

  const increaseQty = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQty = () => {
    setQuantity(quantity - 1)
  }

  if (loading) return <Spinner />

  return (
    <div className="container-fluid mt-3">
      {error && <Alert type='danger'>{error}</Alert>}
        <div className="row">
            <div className="row mb-3">
              <div className="col-md-5 text-center">
                <img
                  src={product?.image}
                  className="img-fluid mb-3"
                  alt={product?.name}
                />
              </div>
              <div className="col-md-7">
                <h1 className="h4 d-inline me-2">
                  {product?.name}
                </h1>
                {product?.isNewProduct && <span className="badge bg-success mx-2">New</span>}
                <span className="badge bg-danger">Hot</span>
                    <Rating averageRating={product?.averageRating} numOfReviews={product?.numOfReviews} />
                <dl className="row lg mb-3">
                  <dt className="col-sm-3">Availability</dt>
                  <dd className="col-sm-9">{product?.countInStock <= 15 ? <span className="badge bg-danger">Hurry up! Only few more left</span> : <span className="badge bg-success">Available</span>}</dd>
                  <dt className="col-sm-3">Author</dt>
                  <dd className="col-sm-9">{product?.author}</dd>
                  <dt className="col-sm-3">Category</dt>
                  <dd className="col-sm-9">{product?.category?.name}</dd>
                  <dt className="col-sm-3">Publisher</dt>
                  <dd className="col-sm-9">{product?.publisher?.name}</dd>
                  <dt className="col-sm-3">Genre</dt>
                  <dd className="col-sm-9">{product?.genre?.name}</dd>
                </dl>

                <div className="mb-3">
                  <span className="fw-bold h3 me-2">${product?.price}</span>
                </div>
                <div className="mb-3">
                  <div className="d-inline float-start me-2">
                    <div className="input-group input-group-sm mw-140">
                      <button
                        className="btn btn-primary text-white"
                        type="button"
                        disabled={quantity <= 1}
                        onClick={decreaseQty}
                      >
                        <span><i className="fas fa-minus"></i></span>
                      </button>
                      <input
                        type="number"
                        className="form-control text-center"
                        value={quantity}
                        readOnly
                      />
                      <button
                        className="btn btn-primary text-white"
                        type="button"
                        disabled={quantity >= product?.countInStock}
                        onClick={increaseQty}
                      >
                       <span><i className="fas fa-plus"></i></span>
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-primary me-2"
                    title="Add to cart"
                    disabled={product?.countInStock === 0}
                  >
                   <span><i className="fas fa-plus"></i></span> Add to cart
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-warning me-2"
                    title="Buy now"
                  >
                    <span><i className="fas fa-shopping-cart"></i></span> Buy now
                  </button>
                </div>
                <div className="bg-light border rounded">
                  <p className="fw-bold mx-2 mt-3 h3">
                    About book
                  </p>
                  <p className="h6 text-secondary mx-2">{product?.description}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-link"
                      id="nav-randr-tab"
                      data-bs-toggle="tab"
                      href="#nav-randr"
                      role="tab"
                      aria-controls="nav-randr"
                      aria-selected="false"
                    >
                      Ratings & Reviews
                    </a>
                    <a
                      className="nav-link"
                      id="nav-ship-returns-tab"
                      data-bs-toggle="tab"
                      href="#nav-ship-returns"
                      role="tab"
                      aria-controls="nav-ship-returns"
                      aria-selected="false"
                    >
                      Shipping & Returns
                    </a>
                  </div>
                </nav>
                <div className="tab-content p-3 small" id="nav-tabContent">
                <div
                    className="tab-pane fade"
                    id="nav-randr"
                    role="tabpanel"
                    aria-labelledby="nav-randr-tab"
                  >
                    {Array.from({ length: 5 }, (_, key) => (
                      <RatingReviews key={key} />
                    ))}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-ship-returns"
                    role="tabpanel"
                    aria-labelledby="nav-ship-returns-tab"
                  >
                    <ShippingReturns />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
  )
}

export default ProductPage