import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='container-fluid bg-secondary'>
      <div className='row'>
        <div className='d-flex flex-column col-auto min-vh-100'>
          <div className='mt-2 text-center'>
            <hr className='text-white d-none d-sm-block' />
            <p className='text-white d-none d-sm-inline text-decoration-none d-flex align-items-center'>
              <span className='fs-5'>Admin Menu</span>
            </p>
            <hr className='text-white nowrap d-none d-sm-block' />
            <ul className='nav nav-pills flex-column mt-2 mt-sm-0' id='menu'>
              <li className='nav-item my-sm-1 my-2'>
                <Link className='nav-link text-white text-center text-sm-start' aria-current='page'>
                  <i className='fas fa-tachometer-alt'></i>
                  <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                </Link>
              </li>
              <li className='nav-item my-sm-1 my-2'>
                <Link to='/' className='nav-link text-white text-center text-sm-start'>
                  <i className='fas fa-home'></i>
                  <span className='ms-2 d-none d-sm-inline'>Home</span>
                </Link>
              </li>
              <li className='nav-item my-sm-1 my-2'>
                <Link to='/admin/all-orders' className='nav-link text-white text-center text-sm-start'>
                  <i className='fas fa-shopping-basket'></i>
                  <span className='ms-2 d-none d-sm-inline'>Orders</span>
                </Link>
              </li>
              <li className='nav-item my-sm-1 my-2'>
                <Link to='/' className='nav-link text-white text-center text-sm-start'>
                  <i className='fas fa-users'></i>
                  <span className='ms-2 d-none d-sm-inline'>Users</span>
                </Link>
              </li>
              <li className='nav-item my-sm-1 my-2'>
                <Link to='/' className='nav-link text-white text-center text-sm-start'>
                  <i className='fas fa-star'></i>
                  <span className='ms-2 d-none d-sm-inline'>Reviews</span>
                </Link>
              </li>
              <li className='nav-item my-sm-1 my-2'>
                <a href='#productSubmenu' data-bs-toggle='collapse' aria-expanded='false' className='nav-link text-white text-center text-sm-start'>
                  <i className='fab fa-product-hunt'></i>
                  <span className='ms-2 d-none d-sm-inline'> Products &nbsp;<i className='fas fa-sort-down'></i></span>
                </a>
                <ul className='nav collapse ms-1 flex-column' id='productSubmenu' data-bs-parent='#menu'>
                    <li className='nav-item'>
                        <Link className='nav-link text-white text-center text-sm-start'> <i className='fas fa-th'></i> All Products</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-white text-center text-sm-start'><i className='fas fa-plus'></i> Add Product</Link>
                    </li>
                </ul>
              </li>
              <li className='nav-item my-sm-1 my-2'>
                <a href='#categorySubmenu' data-bs-toggle='collapse' aria-expanded='false' className='nav-link text-white text-center text-sm-start' aria-current='page'>
                <i className='fas fa-user-shield'></i><span className='ms-2 d-none d-sm-inline'>Categories &nbsp;<i className='fas fa-sort-down'></i></span>
                </a>
                <ul className='nav collapse ms-1 flex-column' id='categorySubmenu' data-bs-parent='#menu'>
                    <li className='nav-item'>
                        <Link className='nav-link text-white text-center text-sm-start'> <i className='fas fa-th'></i> All Categories</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-white text-center text-sm-start'><i className='fas fa-plus'></i> Add Category</Link>
                    </li>
                </ul>
              </li>
              <li className='nav-item my-sm-1 my-2'>
                <a href='#publishersSubmenu' data-bs-toggle='collapse' aria-expanded='false' className='nav-link text-white text-center text-sm-start' aria-current='page'>
                <i className='fas fa-user-shield'></i><span className='ms-2 d-none d-sm-inline'>Publishers &nbsp;<i className='fas fa-sort-down'></i></span>
                </a>
                <ul className='nav collapse ms-1 flex-column' id='publishersSubmenu' data-bs-parent='#menu'>
                    <li className='nav-item'>
                        <Link className='nav-link text-white text-center text-sm-start'> <i className='fas fa-th'></i> All Publishers</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-white text-center text-sm-start'><i className='fas fa-plus'></i> Add Publisher</Link>
                    </li>
                </ul>
              </li>
              <li className='nav-item my-sm-1 my-2'>
                <a href='#genresSubmenu' data-bs-toggle='collapse' aria-expanded='false' className='nav-link text-white text-center text-sm-start' aria-current='page'>
                <i className='fas fa-user-shield'></i><span className='ms-2 d-none d-sm-inline'>Genres &nbsp;<i className='fas fa-sort-down'></i></span>
                </a>
                <ul className='nav collapse ms-1 flex-column' id='genresSubmenu' data-bs-parent='#menu'>
                    <li className='nav-item'>
                        <Link className='nav-link text-white text-center text-sm-start'> <i className='fas fa-th'></i> All Genres</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-white text-center text-sm-start'><i className='fas fa-plus'></i> Add Genres</Link>
                    </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
