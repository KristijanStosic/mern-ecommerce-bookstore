import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPublishers } from '../../redux/publishers/publisherActions'
import Spinner from '../../components/Spinner'
import Sidebar from '../../components/admin/Sidebar'
import Alert from '../../components/Alert'
import Modal from 'react-bootstrap/Modal'
import PublisherItem from '../../components/admin/publishers/PublisherItem'
import CreateCategoryForm from '../../components/admin/categories/CreateCPGForm'
import { closeCreateModal, openCreateModal } from '../../redux/modal/modalSlice'
import CreateModal from '../../components/CreateModal'

const PublisherListPage = () => {
  //const [show, setShow] = useState(false)

  //const handleShow = () => setShow(true)
  //const handleClose = () => setShow(false)

  const dispatch = useDispatch()
  const { publishers, loading, error } = useSelector((state) => state.publishers)

  const { isOpenCreateModal } = useSelector((state) => state.modal)

  useEffect(() => {
    dispatch(getAllPublishers())
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
              <h1>All Publishers</h1>
              <button
                className='btn btn-success align-self-center'
                onClick={() => dispatch(openCreateModal())}
              >
                <i className='fas fa-plus'> </i> Create Publisher
              </button>
            </div>
            <table className='table table-striped table-bordered table-hover border'>
              <thead className='table-dark align-center'>
                <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>Publisher name</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {publishers &&
                  publishers?.map((publisher, index) => (
                    <tr key={publisher._id}>
                      <th scope='row'>{index + 1}</th>
                      <PublisherItem publisher={publisher} />
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        </div>
      </div>
      {/* <Modal show={isOpenCreateDialog} onHide={() => dispatch(closeModal())} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateCategoryForm handleClose={() => dispatch(closeModal())} />
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={() => dispatch(closeModal())}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal> */}
      {isOpenCreateModal && <CreateModal type='Publisher' />}
    </>
  )
}

export default PublisherListPage
