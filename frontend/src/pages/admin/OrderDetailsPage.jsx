import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { formatDate } from '../../utils/utils'
import { getOrderById } from '../../redux/orders/orderActions'
import Alert from '../../components/Alert'
import Spinner from '../../components/Spinner'

const OrderDetailsPage = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const { order, loading, error } = useSelector((state) => state.orders)

  const orderId = params.orderId

  useEffect(() => {
    dispatch(getOrderById(orderId))
  }, [dispatch, orderId])

  if (loading) return <Spinner />

  return (
    <>
      <div className='container mt-3'>
        <div className='px-3'>
          {error && <Alert type='danger'>{error}</Alert>}
        </div>
        <div className="d-flex justify-content-center">
        <div className='col-md-6 p-3'>
              <div className='card mb-3 h-100'>
                <div className='card-header fw-bold'>Order Items</div>
                <div className='card-body'>
                  {order?.orderItems.map((orderItem) => (
                    <>
                      <div className='d-flex justify-content-start align-items-center p-1'>
                        <img
                          width='40px'
                          height='40px'
                          src={orderItem?.image}
                          alt={orderItem.name}
                        />
                        <p className='card-text ms-2'>
                          {orderItem.quantity} x {orderItem.name} x <strong>${orderItem?.price}</strong>
                        </p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className='col-md-6 p-3'>
              <div className='card mb-3 h-100'>
                <div className='card-header fw-bold'>Shipping Address</div>
                <div className='card-body'>
                  <p className='card-text'>
                    Name: <strong>{order?.shippingAddress.name}</strong>
                  </p>
                  <p className='card-text'>
                    Phone: <strong>{order?.shippingAddress.phoneNumber}</strong>
                  </p>
                  <p className='card-text'>
                    Address: <strong>{order?.shippingAddress.address}</strong>
                  </p>
                  <p className='card-text'>
                    Postal Code:{' '}
                    <strong>{order?.shippingAddress.postalCode}</strong>
                  </p>
                  <p className='card-text'>
                    City: <strong>{order?.shippingAddress.city}</strong>
                  </p>
                  <p className='card-text'>
                    Country: <strong>{order?.shippingAddress.country}</strong>
                  </p>
                </div>
              </div>
            </div>
        </div>



        <div className='d-flex justify-content-center align-items-center'>
                        
        <div className='col-md-6 p-3'>
              <div className='card mb-3'>
                <div className='card-header fw-bold h-100'>Payment Details</div>
                <div className='card-body'>
                  <h5 className='card-title'>Special title treatment</h5>
                  <p className='card-text'>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          <div className='col-md-6 p-3'>
            <div className='card mb-3'>
              <div className='card-header fw-bold'>Total</div>
              <div className='card-body'>
                <h5 className='card-title'>Special title treatment</h5>
                <p className='card-text'>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {isOpenUpdateModal && (
        <UpdateProductForm
          isOpen={isOpenUpdateModal}
          onClose={setIsOpenUpdateModal}
          itemToUpdate={product}
          updateAction={updateProduct}
          type='Product'
        />
      )} */}
    </>
  )
}

export default OrderDetailsPage
