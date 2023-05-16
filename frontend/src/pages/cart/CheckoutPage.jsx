import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import ShippingInformation from './ShippingInformation'
import useTitle from '../../hooks/useTitle'

const CheckoutPage = () => {
  useTitle('Checkout')

  const location = useLocation()
  const { user } = useSelector((state) => state.auth)

  return user ? (
    <>
      <div className='container'>
        <h1 className='display-6 mt-3'>Checkout</h1>
        <div className='row'>
          <div className='col-md-12 mb-3'>
            <ShippingInformation />
          </div>
        </div>
      </div>
    </>
  ) : (
    <Navigate to='/login' replace={true} state={{ from: location }} />
  )
}

export default CheckoutPage