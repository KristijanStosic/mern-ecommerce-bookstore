import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/auth/authActions'
import { toast } from 'react-hot-toast'
import Search from './Search'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    //dispatch(resetCart())
    toast.success('You have been logged out')
    navigate('/')
  }
  return (
    <>
      <header className='p-3 border-bottom bg-light'>
        <div className='container-fluid'>
          <div className='row g-3'>
            <div className='col-md-3 text-center'>
              <Link to='/'>
                <img alt='logo' src='../../images/logo.webp' />
              </Link>
            </div>
            <div className='col-md-5'>
              <Search />
            </div>
            <div className='col-md-4'>
              <div className='position-relative d-inline me-3'>
                <Link to='/cart' className='btn btn-primary'>
                  <span><i className='fas fa-shopping-cart'></i></span>
                  <div className='position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle'>
                    2
                  </div>
                </Link>
              </div>
              {user && (
                <div className='btn-group'>
                  <button
                    type='button'
                    className='btn btn-secondary rounded-circle border me-3'
                    data-toggle='dropdown'
                    aria-expanded='false'
                    aria-label='Profile'
                    data-bs-toggle='dropdown'
                  >
                     <span><i className='fas fa-user'></i></span>
                  </button>
                  <ul className='dropdown-menu'>
                    <li>
                      <Link className='dropdown-item'>
                      <span><i className='fas fa-id-badge'></i></span> {user?.name}
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' to='/account/profile'>
                      <span><i className='fas fa-id-badge'></i></span> My Profile
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' to='/my-orders'>
                      <span><i className='fas fa-user'></i></span> My Orders
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                  </ul>
                </div>
              )}
              {user ? (
                <>
                  <button className='btn btn-primary' onClick={onLogout}>
                  <span><i className='fas fa-arrow-left'></i></span> Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to='/login'>
                    <button className='btn btn-primary'>
                    <span><i className='fas fa-arrow-right'></i></span> Login
                    </button>
                  </Link>{' '}
                  &nbsp;
                  <Link to='/register'>
                    <button className='btn btn-primary'>
                    <span><i className='fas fa-user-plus'></i></span> Register
                    </button>
                  </Link>{' '}
                  &nbsp;
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
