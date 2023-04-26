import LoginForm from '../../components/auth/LoginForm'

const LoginPage = () => {
  return (
    <div className='d-flex justify-content-center align-items-center my-3 py-2'>
      <div className='border border-1 border-muted rounded'>
        <div className='m-4 p-4'>
          <LoginForm  />
        </div>
      </div>
    </div>
  )
}

export default LoginPage