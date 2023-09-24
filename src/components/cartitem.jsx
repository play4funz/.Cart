import React, { useEffect, useState } from 'react';


const TOKEN = "YOUR_API_TOKEN"; // Replace with your actual API token
const BASE_URL = "https://api.airtable.com/v0/app25NtjIREhmBAXA/Cart%20items";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

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
        setCartItems(cartData);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCartItems);
    const newTotal = updatedCartItems.reduce((accum, curr) => accum + curr.price * curr.quantity, 0);
    setTotal(newTotal);
  };

  const refetchDataExceptDeleted = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          data={item}
          handleQuantityChange={handleQuantityChange}
          refetchDataExceptDeleted={refetchDataExceptDeleted}
        />
      ))}
      <div>Total: ${total}</div>
    </div>
  );
};

export default ShoppingCart;
