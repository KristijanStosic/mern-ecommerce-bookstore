import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { login, resetErrorState } from '../../redux/auth/authActions'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { validateEmail } from '../../utils/utils'
import PasswordInput from './PasswordInput'
import Alert from '../Alert'
import Spinner from '../Spinner'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const { loading, error, user } = useSelector((state) => state.auth)

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const redirect = '/products'

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) return toast.error('Email is required')
    if (!validateEmail(email)) return toast.error('Email invalid')
    if (!password) return toast.error('Password is required')
    if (password.length <= 5) return toast.error('Password must be at least 8 characters')

    dispatch(login({ email, password }))
    setTimeout(() => {
      dispatch(resetErrorState())
    }, 3500)
  }

  useEffect(() => {
    if (user) {
      toast.success('Logged in successfully!')
      if (location.state?.from) {
        navigate(location.state.from)
      } else {
        navigate(redirect)
      }
    }
  }, [user, redirect, error, navigate, location.state])

  if (loading) return <Spinner />

  return (
    <>
    {error && <Alert type='danger'>{error}</Alert>}
    <form className='needs-validation' noValidate onSubmit={handleSubmit}>
    <h4 className='text-center'>Login</h4>
      <label htmlFor='email'>Email</label>
      <div className='input-group mb-3'>
        <span className='input-group-text'>
        <span><i className='fas fa-envelope'></i></span>
        </span>
        <input
          className='form-control'
          name='email'
          id='email'
          type='text'
          onChange={onChange}
          placeholder='Email'
        />
      </div>
      <label htmlFor='password'>Password</label>
      <div className='input-group mb-3'>
        <PasswordInput
          placeholder='Password'
          name='password'
          value={password}
          onChange={onChange}
          onPaste={(e) => {
            e.preventDefault()
            return false
          }}
        />
      </div>
      <div className='d-grid'>
        <button type='submit' className='btn btn-primary mb-3'>
          Login
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center">

      <Link className='float-start' to='/register' title='Sign Up'>
        Don't have an account? Register here
      </Link>
      </div>

      <div className='clearfix'></div>
      <hr></hr>
      <div className='row'>
        <div className='col- text-center'>
          <p className='text-muted small'>Or you can join with</p>
        </div>
        <div className='col- text-center'>
          <Link to='/' className='btn btn-light text-white bg-twitter me-3'>
            <span><i className='fab fa-twitter'></i></span>
          </Link>
          <Link to='/' className='btn btn-light text-white me-3 bg-facebook'>
          <span><i className='fab fa-facebook'></i></span>
          </Link>
          <Link to='/' className='btn btn-light text-white me-3 bg-google'>
          <span><i className='fab fa-google'></i></span>
          </Link>
        </div>
      </div>
    </form>
    </>
  )
}

export default LoginForm
