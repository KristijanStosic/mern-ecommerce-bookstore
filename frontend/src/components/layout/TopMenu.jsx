import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark p-0'>
      <div className='container-fluid border-bottom border-top border-3 border-warning'>
        <Link className='navbar-brand text-warning fw-semibold' to='/'>
          Bookstore
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className='nav-item dropdown'>
              <button
                className='btn nav-link dropdown-toggle fw-bold text-warning'
                id='navbarDropdown'
                data-toggle='dropdown'
                aria-expanded='false'
                data-bs-toggle='dropdown'
              >
                All Pages
              </button>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <Link className='dropdown-item' to='/login'>
                    Login
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/register'>
                    Register
                  </Link>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <Link className='dropdown-item' to='/contact-us'>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <Link className='dropdown-item' to='/fsafasf'>
                    404 Page Not Found
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-warning' to='/products'>
                Explore books
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default TopMenu
