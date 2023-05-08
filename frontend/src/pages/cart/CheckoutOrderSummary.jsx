import { useSelector } from 'react-redux'

const CheckoutOrderSummary = () => {
  const { cart, subtotal } = useSelector((state) => state.cart)

  return (
    <div className='card mb-3'>
      <div className='card-header'>
        <i className='fas fa-shopping-cart'></i> Cart
        <span className='badge bg-warning float-end'>
          <span className='text-dark'>{cart?.length}</span>
        </span>
      </div>
      <ul className='list-group list-group-flush'>
        {cart &&
          cart.map((cartItem, index) => (
            <li
              key={index}
              className='list-group-item d-flex justify-content-between lh-sm'
            >
              <div>
                <h6 className='my-0'>
                  <img src={cartItem.image} alt={cartItem.name} width='30px' height='30px' /> {cartItem.quantity} x {cartItem.name}
                </h6>
                <small className='text-muted'>Author: {cartItem.author}</small>
              </div>
              <span className='text-dark fw-semibold'>${cartItem.price}</span>
            </li>
          ))}
        <li className='list-group-item'>
          <span>Payment methods we currently accept:</span>
          <span>
            <img
              className='ms-1'
              src='../../../images/payment/stripe.png'
              alt='stripe'
              width='40px'
              height='40px'
            />
          </span>
        </li>
        <li className='list-group-item d-flex justify-content-between'>
          <span className='fw-bold'>Total (USD)</span>
          <strong>${subtotal}</strong>
        </li>
      </ul>
    </div>
  )
}

export default CheckoutOrderSummary
