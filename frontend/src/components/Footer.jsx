import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container-fluid bg-primary'>
          <div className='row '>
            <div className='col-md-9 py-3 text-white'>
              Get connected with us on social networks!
            </div>
            <div className='col-md-3 py-3 text-center text-white'>
              <Link to='/' title='Apple'>
                Icon Apple
              </Link>
              <Link to='/' title='Windows'>
                Icon Windows
              </Link>
              <Link to='/' title='Android'>
                Icon Android
              </Link>
              |
              <Link to='/' title='Twitter'>
                Icon Twitter
              </Link>
              <Link to='/' title='Facebook'>
                Icon Facebook
              </Link>
              <Link to='/' title='Instagram'>
                Icon Instagram
              </Link>
              <Link to='/' title='Youtube'>
                Icon Youtube
              </Link>
            </div>
          </div>
        </div>
        <div className='container-fluid bg-dark text-white'>
          <div className='row '>
            <div className='col-md-3 py-3'>
              <div className='h6'>Bookstore</div>
              <hr />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className='col-md-3 py-3'>
              <div className='h6'>Products</div>
              <hr />
              <ul className='list-group list-group-flush'>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Electronics
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Mobiles
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Car & bike
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Super Market
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Travel Cards
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-md-3 py-3'>
              <div className='h6'>Policy</div>
              <hr />
              <ul className='list-group list-group-flush'>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Return Policy
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Terms Of Use
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Security
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    Privacy
                  </Link>
                </li>
                <li className='list-group-item bg-dark text-white border-light'>
                  <Link
                    to='/'
                    className='text-decoration-none text-white stretched-link'
                  >
                    EPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-md-3 py-3'>
              <div className='h6'>Address</div>
              <hr />
              <address>
                <strong>Twitter, Inc.</strong>
                <br />
                1355 Market St, Suite 900
                <br />
                San Francisco, CA 94103
                <br />
                <abbr title='Phone'>P:</abbr> (123) 456-7890
              </address>
              <div className='h6'>Customer Care</div>
              <hr />
             Icon Telephone +1800 100 1000
              <br />
              Icon Envelope info@email.com
            </div>
          </div>
        </div>
        <div className='container-fluid bg-secondary text-white text-center'>
          <div className='row'>
            <div className='col-md-2 py-2'>
              <Link to='/' className='text-white text-decoration-none'>
                Icon Briefcase Partner with us
              </Link>
            </div>
            <div className='col-md-2 py-2'>
              <Link to='/' className='text-white text-decoration-none'>
                Icon Badge Add Advertise
              </Link>
            </div>
            <div className='col-md-2 py-2'>
              <Link to='/' className='text-white text-decoration-none'>
                Icon Gift
              </Link>
            </div>
            <div className='col-md-3 py-2'>
              © 2009-{new Date().getFullYear()} React-E-Commerce.com
            </div>
            <div className='col-md-3 py-2 bg-white'>
              <img
                src='../../images/payment/american_express.webp'
                width='32'
                alt='American Express'
                className='me-2'
              />
              <img
                src='../../images/payment/maestro.webp'
                width='32'
                alt='Maestro'
                className='me-2'
              />
              <img
                src='../../images/payment/netbanking.webp'
                width='32'
                alt='Net Banking'
                className='me-2'
              />
              <img
                src='../../images/payment/paypal.webp'
                width='32'
                alt='Paypal'
                className='me-2'
              />
              <img
                src='../../images/payment/rupay.webp'
                width='32'
                alt='Rupay'
                className='me-2'
              />
              <img
                src='../../images/payment/upi.webp'
                width='32'
                alt='UPI'
                className='me-2'
              />
              <img
                src='../../images/payment/visa.webp'
                width='32'
                alt='Visa'
                className='me-2'
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer