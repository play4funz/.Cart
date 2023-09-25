import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from './shopcontext';


const Shopitems = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, cartItems, viewProductDetails } = useContext(ShopContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (id) => {
    addToCart(id);
  };

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col mb-5">
          <div className="card h-100 m-auto">
            <img src={product.image} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <p className="card-text mb-2">{product.brand}</p>
              <h5>{product.title}</h5>
              <div className="mb-3">
                <p className="price mb-2">
                  <span className="red">${product.price}</span>&nbsp;
                  <p>${product.price * 2}</p>
                </p>
                <Link to="/details" onClick={() => viewProductDetails(product.id)}>
                  <p className="text-center">
                    <button className="fs-4" id="clear-cart">
                      View Details
                    </button>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shopitems;