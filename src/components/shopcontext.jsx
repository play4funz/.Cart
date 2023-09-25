import React, { createContext, useState, useEffect } from 'react';
import ProductDetails from './productdetails';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = [];
  for (let i = 0; i < ProductDetails.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ProductDetails.find((product) => product.id === Number(item)) 
          || ProductDetails.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2);
  };

  const getTotalCartProducts = () => {
    let totalProducts = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalProducts += cartItems[item];
      }
    }
    return totalProducts;
  };
  
  const addToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] + 1
    }));
  };
  
  const removeToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] - 1
    }));
  };
  
  const updateCartItemCount = (newAmount, productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: newAmount
    }));
  };

  const clearCart = () => {
    const updatedCartItems = {};
    for (const productId in cartItems) {
      updatedCartItems[productId] = 0;
    }
    setCartItems(updatedCartItems);
   
    const airtableUrl = 'https://api.airtable.com/v0/app25NtjIREhmBAXA/Cart%20items';
    const tableName = 'tblmii6SaU5GLBuBS';
  
    const payload = {
      records: Object.keys(updatedCartItems).map(productId => {
        const product = products.find(product => product.id === Number(productId));
        return {
          id: productId,
          fields: {
            "title": product.title,
            "price": product.price,
            "description": product.description,
            "category": product.category,
            "image": product.image,
            "cartItem": updatedCartItems[productId]
          }
        };
      })
    };

    fetch(`${airtableUrl}/${tableName}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${Authorization}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Cart data updated in Airtable:', data);
    })
    .catch(error => {
      console.error('Error updating cart data in Airtable:', error);
    });
  };
  
  const resetCart = () => {
    setCartItems([]);
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const viewProductDetails = (productId) => {
    setSelectedProduct(productId);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };
  
  const contextValue = {
    cartItems,
    products,
    addToCart,
    removeToCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartProducts,
    clearCart,
    resetCart,
    viewProductDetails,
    closeProductDetails,
    selectedProduct,
  };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
