import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

const footer = () => {
  return <>
  <footer className='footer'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-4 d-flex flex-column'>
          <h3 className='mb-5'> Contact us</h3>
          <div className='footer-details'>
            <p className='mb-3'><b>Address:</b>Singapore</p>
            <p className='mb-3'><b>Phone:</b><a href="tel:12356890">Call us at 12356890</a></p>
            <p className='mb-5'><b>Hours Open:</b>From 8am to 9pm</p>
            <p className='mb-3'><b>Follow Us</b></p>
            <div className='col-4 social-icons mb-3 d-flex justify-content-around'>
              <Link><AiFillTwitterCircle className='fs-4'/></Link>
              <Link><BsFacebook className='fs-4'/></Link>
              <Link><BsInstagram className='fs-4'/></Link>
              <Link><BsLinkedin className='fs-4'/></Link>
            </div>
          </div>
        </div>
        <div className='col-2'>
          <h3 className='mb-5'>About</h3>
          <div className='footer details d-flex flex-column'>
            <Link className='mb-3'>
              About Us
            </Link>
            <Link className='mb-3'>
              Delivery
            </Link>
            <Link className='mb-3'>
              Privacy Policy
            </Link>
            <Link className='mb-3'>
              Tax Policy
            </Link>
            <Link className='mb-3'>
              Fee Policy
            </Link>
            <Link className='mb-3'>
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className='col-2'>
          <h3 className='mb-5'>Account</h3>
          <div className='footer details d-flex flex-column'>
            <Link className='mb-3'>
              Profile
            </Link>
            <Link className='mb-3'>
              View Cart
            </Link>
            <Link className='mb-3'>
              My Orders
            </Link>
            <Link className='mb-3'>
              My Wishlist
            </Link>
            <Link className='mb-3'>
              Help
            </Link>
            <Link className='mb-3'>
              Coupons
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </>
}
export default footer