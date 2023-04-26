import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories } from '../../redux/categories/categoryActions'
import Spinner from '../../components/Spinner'
import Sidebar from '../../components/admin/Sidebar'
import Alert from '../../components/Alert'
import CategoryItem from '../../components/admin/categories/CategoryItem'
import { openCreateModal } from '../../redux/modal/modalSlice'
import CreateModal from '../../components/CreateModal'

const CategoryListPage = () => {
  const dispatch = useDispatch()
  const { categories, loading, error } = useSelector((state) => state.categories)
  const { isOpenCreateModal } = useSelector((state) => state.modal)

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
                onClick={() => dispatch(openCreateModal())}
              >
                <i className='fas fa-plus'> </i> Create Category
              </button>
            </div>
            <table className='table table-striped table-bordered table-hover border'>
              <thead className='table-dark'>
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
                      <CategoryItem category={category} />
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        </div>
      </div>
          
      {isOpenCreateModal && <CreateModal type='Category' />}
    </>
  )
}

export default CategoryListPage
