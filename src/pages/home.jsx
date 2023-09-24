import React from 'react';
import { Link } from 'react-router-dom'
import FeaturedProducts from '../components/featuredproducts'

const home = () => {
  return <>
  <section className='banner'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='banner-details p-5 d-flex flex-column align-items-center justify-content-center'>
          <span className='shadow-lg p-3 mt-3 text-white'>Trade in offer!</span>
          <h1>Super Deals</h1>
          <h2>On all products</h2>
          <p className='p-1 m-0 mb-2'>Save more with Shozada at 100% discounts!</p>
          <Link to='/shop' className='button-link mb-3'>Shop Now</Link>
        </div>
      </div>
    </div>
  </section>
  <section className='featured-products p-5'>
    <div className='container-xxl'>
      <div className='text-center'>
        <h1>Featured Products</h1>
        <p>New Designs</p>
      </div>
      <FeaturedProducts />
    </div>
  </section>
  </>
}
export default home