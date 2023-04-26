import RegisterForm from '../../components/auth/RegisterForm'

const RegisterPage = () => {
  return (
    <div className='d-flex justify-content-center align-items-center my-3 py-2'>
      <div className='border border-1 border-muted rounded'>
        <div className='m-4 p-4'>
          <RegisterForm  />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage