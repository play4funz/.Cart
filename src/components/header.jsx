import React, { useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineInboxIn } from 'react-icons/hi';
import { VscAccount } from 'react-icons/vsc';
import { CgShoppingCart } from 'react-icons/cg';


const Header = () => {  
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <header className="header-top-strip p-1 shadow-md">
    <div className="container-xxl">
      <div className="nav-links row align-items-center">
        <div className="col-6">
          <p>PRODUCTS ON SALE AT 100% DISCOUNT</p>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <div>
          <Link><BiPhoneCall className='fs-3 mx-4'/></Link>
            <Link><AiOutlineMail className='fs-3 mx-4'/></Link>
          </div>
        </div>
      </div>
    </div>
    </header>
      <header className="header-upper px-3 sticky-top">
    <div className="container-xxl">
      <div className='row'>
        <div className='nav-links col-2 d-flex align-items-center justify-content-between text-center m-auto'>
          <Link to={'/'} className={location.pathname === '/' ? 'active' : 'active'}>Shozada</Link>
        </div>
        <div className='col-3 d-flex algin-items-center mt-3'>
        
        <div className="input-group mb-3" onSubmit={handleSearch}>
        <input onChange={handleChange} type="text" value={searchQuery} className="form-control p-1" placeholder="Search Products"/>
        <button className="input-group-text" id="basic-addon2" onClick={handleSearch}>Search</button>
        </div>
        
        </div>
        <div className="nav-links col-2 d-flex align-items-center justify-content-between text-center m-auto">
          <Link to={'/'} className={location.pathname === '/' ? 'active' : 'inactive'}>Home</Link>
          <Link to={'shop'} className={location.pathname === '/shop' ? 'active' : 'inactive'}>Shop</Link>
        </div>
        <div className="nav-links-nav col-3 d-flex align-items-center justify-content-around">
          <Link to={'/'} className={location.pathname === '/' ? 'inactive' : 'active'}>
          <div className='d-flex'> 
          <span><HiOutlineInboxIn className='fs-3 mx-2'/></span>
          <p>WishList</p>
          </div>
          </Link>
          <Link to={'login'} className={location.pathname === '/login' ? 'inactive' : 'active'}>
          <div className='d-flex'>
          <span><VscAccount className='fs-3 mx-2'/></span>
          <p>Login</p>
          </div>
          </Link>
          <Link to={'cart'} className={location.pathname === '/cart' ? 'inactive' : 'active'}>
          <div className='d-flex'>
          <span><CgShoppingCart className='fs-3 mx-2'/></span>
          <p>Cart</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
    </header>
    </>
  );
};
export default Header;