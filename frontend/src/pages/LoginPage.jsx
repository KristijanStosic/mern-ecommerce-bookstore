import React, { lazy, } from 'react'

const LoginForm = lazy(() => import('../components/LoginForm'))

const LoginPage = () => {
  return (
    <div className='d-flex justify-content-center align-items-center my-3 py-2'>
      <div className='border border-1 border-muted rounded'>
        <div className='m-4 p-4'>
          <h4 className='text-center'>Login</h4>
          <LoginForm  />
        </div>
      </div>
    </div>
  )
}

export default LoginPage