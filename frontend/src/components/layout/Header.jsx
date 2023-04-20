import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/auth/authActions'
import { toast } from 'react-hot-toast'
import Search from '../apiFeatures/Search'

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
      <header className='p-4 border-bottom border-3 border-primary bg-light'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex justify-content-center align-items-center'>
            <Link to='/' className='text-decoration-none fs-3'>
              <strong className='text-primary'>Book</strong>
              <strong className='text-warning'>store</strong>
            </Link>
            <div className='mx-3'>
              <Search />
            </div>
          </div>

          <div className='d-flex justify-content-center align-items-center'>
            <div className='position-relative d-inline me-3'>
              <Link to='/cart' className='btn btn-outline-primary'>
                <span>
                  <i className='fas fa-shopping-cart'></i>
                </span>
                <div className='position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle'>
                  2
                </div>
              </Link>
            </div>
            {user ? (
              <div className='dropdown'>
                <button
                  className='btn btn-outline-primary dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton1'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  {user?.name}
                </button>
                <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                  {user && user?.isAdmin && (
                    <li>
                      <Link to='/admin-dashboard' className='dropdown-item'>
                        <i className='fas fa-user-shield'></i> Admin Dashboard
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link to='/my-profile' className='dropdown-item'>
                      <i className='fas fa-user'></i> Profile
                    </Link>
                  </li>
                  <li>
                    <Link to='/my-orders' className='dropdown-item'>
                      <i className='fas fa-shopping-cart'></i> My Orders
                    </Link>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <button className='dropdown-item' onClick={onLogout}>
                      <i className='fas fa-arrow-left'></i> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className='btn-group'>
                <Link className='btn btn-outline-primary rounded me-3' to='/login'>
                  <span>
                    <i className='fas fa-arrow-right'></i>
                  </span>
                  Login
                </Link>
                <Link className='btn btn-outline-primary rounded' to='/register'>
                  <span>
                    <i className='fas fa-user-plus'></i>
                  </span>
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
