import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders, resetUserOrders } from '../../redux/orders/orderActions'
import { formatDate } from '../../utils/utils'
import Alert from '../../components/Alert'
import Spinner from '../../components/Spinner'
import useTitle from '../../hooks/useTitle'

const MyOrdersPage = () => {
  useTitle('My Orders')

  const dispatch = useDispatch()

  const { myOrders, loading, error } = useSelector((state) => state.orders)

  useEffect(() => {
    dispatch(getUserOrders())
    dispatch(resetUserOrders())
  }, [dispatch])

  if (loading) return <Spinner />

  return (
    <div className='container my-3'>
      {error && <Alert type='danger'>{error}</Alert>}
      <h3>My Orders</h3>
      <div className='col-md-12'>
        <div className='row'>
          {myOrders &&
            myOrders.map((order) => (
              <div className='col-md-6 mb-3'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='my-2'>
                      <span className='h4'>Payment Details</span>
                    </div>
                    <h6 className='text-warning'>Payment method: <strong>{order.paymentMethod}</strong></h6>
                    <div className='d-flex'>            
                      <span>Paid: </span>
                      {order.isPaid ? (
                        <span>
                          <i className='fas fa-check text-success ms-2'></i>
                        </span>
                      ) : (
                        <span>
                          <i className='fas fa-times text-danger ms-2'></i>
                        </span>
                      )}
                      <span className='mx-2'>Delivered: </span>
                      {order.isDelivered ? (
                        <span>
                          <i className='fas fa-check text-success'></i>
                        </span>
                      ) : (
                        <span>
                          <i className='fas fa-times text-danger'></i>
                        </span>
                      )}
                    </div>
                    <div className="mt-2">
                    {order.isPaid ? (
                      <Alert type='success'>{formatDate(order.paidAt)}</Alert>
                    ) : (
                      <Alert type='danger'>Not Paid Yet</Alert>
                    )}

                    {order.isDelivered ? (
                      <Alert type='success'>{formatDate(order.deliveredAt)}</Alert>
                    ) : (
                      <Alert type='danger'>Not Delivered Yet</Alert>
                    )}
                    </div>
                    <div className="d-flex flex-column">
                      <span className='h4'>Shipping Address</span>
                      <p>Name: <strong>{order.shippingAddress.name}</strong></p>
                      <p>Phone: <strong>{order.shippingAddress.phoneNumber}</strong></p>
                      <p>Address: <strong>{order.shippingAddress.address}</strong></p>
                      <p>City: <strong>{order.shippingAddress.city}</strong></p>
                      <p>Postal Code: <strong>{order.shippingAddress.postalCode}</strong></p>
                      <p>Country: <strong>{order.shippingAddress.country}</strong></p>
                    </div>
                    <div className='card-footer'>
                      <div className='d-flex justify-content-between'>
                        <span className='fw-bold h6 text-muted text-center'>
                          Order Date: {formatDate(order?.createdAt)}
                        </span>
                        <span className='fw-bold h6 text-dark text-center'>
                          Total: ${order.totalPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MyOrdersPage
