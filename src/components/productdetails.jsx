import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from './shopcontext';

const ProductDetails = (props) => {
  const { selectedProduct, cartItems, updateCartItemCount } = useContext(ShopContext);
  const productId = selectedProduct || props.match.params.id || 0;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const TOKEN = "patoQuEJ03ThjpevV.830a71f3d8802c2ad5818d940684937ddb8dd168c0ea32bd07a9a2248f297e07";
  const BASE_URL = "https://api.airtable.com/v0/app25NtjIREhmBAXA/Cart%20items?maxRecords=3&view=Grid%20view"
  
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`
          }
        });
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }
        const jsonData = await response.json();
        const cartData = jsonData.records.map((record) => ({
          id: record.id,
          ...record.fields
        }));
        addToCart(cartData);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Error fetching product');
        }
        const productData = await response.json();
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const addToCart = () => {
    const updatedCartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    };

    updateCartItemCount(updatedCartItem);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <div>Product ID: {productId}</div>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="card p-5 m-auto">
              <img src={product.image} alt={product.title} className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card p-3 m-auto">
              <div className="card-body">
                <h5 className="card-title">{product.brand}</h5>
                <h3 className="card-text">{product.title}</h3>
                <p className="card-text">
                  <span className="text-danger fs-4 me-2">${product.price}</span>
                  <strike>${product.price * 2}</strike>
                </p>
                <p className="card-text">{product.description}</p>

                <div className="d-flex align-items-center mb-3 col-6">
                  <input
                    className="form-control text-center"
                    type="number"
                    value={cartItems[product.id]}
                    onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button onClick={addToCart}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
