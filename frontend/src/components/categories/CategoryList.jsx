import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories } from '../../redux/categories/categoryActions'
import Spinner from '../Spinner'
import Sidebar from '../admin/Sidebar'
import Alert from '../Alert'
import Modal from 'react-bootstrap/Modal'
import Category from '../../components/categories/Category'
import CreateCategoryForm from './CreateCategoryForm'

const CategoryList = () => {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const dispatch = useDispatch()
  const { categories, loading, error } = useSelector((state) => state.categories)

  useEffect(() => {
    dispatch(getAllCategories())
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
            <div className='d-flex justify-content-between align-items center'>
              <h1>All Categories</h1>
              <button
                className='btn btn-success align-self-center'
                onClick={handleShow}
              >
                <i className='fas fa-plus'> </i> Create Category
              </button>
            </div>
            <table className='table table-striped table-bordered table-hover border'>
              <thead>
                <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>Category name</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody className=''>
                {categories &&
                  categories?.map((category, index) => (
                    <tr key={category._id}>
                      <th scope='row'>{index + 1}</th>
                      <Category category={category} />
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateCategoryForm handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={handleClose}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CategoryList
