import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, resetErrorState } from '../redux/auth/authActions'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import PasswordInput from './PasswordInput'
import Alert from './Alert'
import Spinner from './Spinner'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const redirect = '/products'

  const { loading, error, user } = useSelector((state) => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      name,
      email,
      password,
    }

    dispatch(register(userData))
    setTimeout(() => {
      dispatch(resetErrorState())
    }, 3500)
  }

  useEffect(() => {
    if (user) {
      navigate(redirect)
      toast.success(`Account created. Welcome aboard ${user.name}`)
    }
  }, [dispatch, user, error, navigate])

  if (loading) return <Spinner />

  return (
    <form className='needs-validation' noValidate onSubmit={handleSubmit}>
      {error && <Alert type='danger'>{error}</Alert>}
      <label htmlFor='name'>Name</label>
      <div className='input-group mb-3'>
        <span className='input-group-text' id='inputGroupPrepend'>
          <span><i className='fas fa-user'></i></span>
        </span>
        <input
          name='name'
          id='name'
          type='text'
          label='Your name'
          placeholder='Name'
          className='form-control'
          onChange={onChange}
        />
        <div className='invalid-feedback'> Please fill the user name. </div>
      </div>
      <label htmlFor='email'>Email</label>
      <div className='input-group mb-3'>
        <span className='input-group-text'>
        <span><i className='fas fa-envelope'></i></span>
        </span>
        <input
          name='email'
          id='email'
          type='text'
          label='Your email'
          placeholder='Email'
          className='form-control'
          onChange={onChange}
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
          Register
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center">

      <Link className='float-start' to='/login'>
        Already have an account? Login here
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
  )
}

export default RegisterForm
