import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllProducts } from '../../redux/products/productActions'
import CardProductGrid from '../../components/products/CardProductGrid'
import CardProductList from '../../components/products/CardProductList'
import useTitle from '../../hooks/useTitle'
import Spinner from '../../components/Spinner'
import Alert from '../../components/Alert'
import Pagination from '../../components/apiFeatures/Pagination'

const ProductsPage = () => {
  useTitle('Explore our products!')
  const [view, setView] = useState('grid')
  const [sort, setSort] = useState('')
  const params = useParams()
  const dispatch = useDispatch()

  const { loading, error, products, page, pages } = useSelector((state) => state.products)

  const pageNumber = params.page || 1
  const keyword = params.keyword

  useEffect(() => {
    dispatch(getAllProducts(keyword, pageNumber, sort))
  }, [dispatch, keyword, pageNumber, sort])

  if (loading) return <Spinner />

  return (
    <>
      <div className='container-fluid mt-3'>
        {error && <Alert type='danger'>{error}</Alert>}
        <div className='row'>
          <div className='col-md-3'>
            {/* <FilterCategory />
          <FilterPrice />
          <FilterSize />
          <FilterStar />
          <FilterColor />
          <FilterClear />
          <FilterTag />
          <CardServices /> */}
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='d-flex justify-content-end align-items-center'>
                <span className='text-nowrap'>Sort by</span>
                <select
                  className='form-select mw-210 float-start ms-3'
                  aria-label='Default select'
                  onChange={(e) => setSort(e.target.value)}
                  value={sort}
                >
                  <option value='name'>Name A - Z</option>
                  <option value='-name'>Name Z - A</option>
                  <option value='price'>Price - Lowest first</option>
                  <option value='-price'>Price - Highest first</option>
                  <option value='createdAt'>Oldest</option>
                  <option value='-createdAt'>Newest</option>
                </select>

                <div className='btn-group ms-3' role='group'>
                  <button
                    aria-label='Grid'
                    type='button'
                    onClick={() => setView('grid')}
                    className={`btn ${
                      view === 'grid' ? 'btn-primary' : 'btn-outline-primary'
                    }`}
                  >
                    <span>
                      <i className='fas fa-th'></i>
                    </span>
                  </button>
                  <button
                    aria-label='List'
                    type='button'
                    onClick={() => setView('list')}
                    className={`btn ${
                      view === 'list' ? 'btn-primary' : 'btn-outline-primary'
                    }`}
                  >
                    <span>
                      <i className='fas fa-bars'></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className='row g-3'>
              {view === 'grid' &&
                products.map((product, index) => {
                  return (
                    <div key={index} className='col-md-4'>
                      <CardProductGrid product={product} />
                    </div>
                  )
                })}
              {view === 'list' &&
                products.map((product, index) => {
                  return (
                    <div key={index} className='col-md-12'>
                      <CardProductList product={product} />
                    </div>
                  )
                })}
            </div>
            <hr />
            <Pagination
              page={page}
              pages={pages}
              keyword={keyword ? keyword : ''}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsPage
