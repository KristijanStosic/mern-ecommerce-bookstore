import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import ShippingInformation from './ShippingInformation'
import CheckoutOrderSummary from './CheckoutOrderSummary'

const CheckoutPage = () => {
  const location = useLocation()
  const { user } = useSelector((state) => state.auth)

  return user ? (
    <>
      <div className='container'>
        <h1 className='display-6 mt-3'>Checkout</h1>
        <div className='row'>
          <div className='col-md-6 mb-3'>
            <ShippingInformation />
          </div>
          <div className='col-md-6 mb-3'>
            <CheckoutOrderSummary />
          </div>
        </div>
      </div>
    </>
  ) : (
    <Navigate to='/login' replace={true} state={{ from: location }} />
  )
}

export default CheckoutPage
