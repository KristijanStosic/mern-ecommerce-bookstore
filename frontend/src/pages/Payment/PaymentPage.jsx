import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState('')

  const { subtotal } = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/api/stripe/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: Number(subtotal), name: user.name, email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [subtotal, user])

  const appearance = {
    theme: 'stripe',
  }

  const options = {
    clientSecret,
    appearance,
  }

  return (
    user && (
      <div className='d-flex justify-content-center align-items-center align-content-center h-100 w-100 my-3'>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        )}
      </div>
    )
  )
}
