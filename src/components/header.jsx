import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { Link} from 'react-router-dom'
import { HiOutlineInboxIn } from 'react-icons/hi'
import { VscAccount } from 'react-icons/vsc'
import { CgShoppingCart} from 'react-icons/cg'


const header = () => {
  return <>
  <header className='header-top-strip p-1 shadow-md'>
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="col-6">
          <p>The totally .Cart Products</p>
        </div>
        <div className="col-6 d-flex justify-content-between">
          <div>
          <a href="tel: 12356890">Call us Now</a>
          </div>
          <div>
          <Link><BiPhoneCall className='fs-3 mx-4'/></Link>
            <Link><AiOutlineMail className='fs-3 mx-4'/></Link>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header className='header-upper'>
    <div className="container-xxl">
      <div className='row'>
        <div className='col-2 text-center'>
          {/* <Link to='/'><img src={logo} alt="" className='img-fluid logo' /></Link> */}
        </div>
        <div className='col-3 d-flex algin-items-center mt-3'>
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">All</span>
        <input type="text" className="form-control p-1" placeholder="Search Products  " aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <button className="input-group-text" id="basic-addon2">Search</button>
      </div>
        </div>

        <div className="nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto">
          <Link to={'/'}>Home</Link>
          <Link to={'shop'}>Shop</Link>
        </div>
        <div className="nav-links-nav col-3 d-flex align-items-center justify-content-around">
          <Link to={'wishlist'} className='d-flex'> <HiOutlineInboxIn className='fs-3 mx-2'/> 
          <p>WishList</p>
          </Link>
          <Link to={'login'} className='d-flex'><VscAccount className='fs-3 mx-2'/>
          <p>Account</p>
          </Link>
          <Link to={'cart'} className='d-flex'><CgShoppingCart className='fs-3 mx-2'/>
          <p>Cart</p>
          </Link>
        </div>
      </div>
    </div>
  </header>
  </>
}

export default header