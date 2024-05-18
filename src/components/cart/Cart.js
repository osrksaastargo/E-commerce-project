import React, { useState, useEffect } from "react";
import "./Cart.css";
import axios from "axios"; // Import Axios for making HTTP requests

const Cart = () => {
  const [cart, setCart] = useState([]);
  const userId = localStorage.getItem("userId");

  const removeFromCart = async (cartId) => {
    try {
      await axios.delete(`http://localhost:4000/api/cart/${cartId}`);
      getCartItems();
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  // Function to save the cart
  const saveCart = () => {
    // Logic to save the cart (e.g., send data to backend, save to local storage, etc.)
    console.log("Cart saved:", cart);
  };

  const getCartItems = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/cart/${userId}`
      );
      setCart(response.data.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, [userId]);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>cartId</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>{item.quantity}</td>
              <td>{item.totalPrice}</td>

              <td>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-buttons">
        <div role="button">
          <a href="/payment">Order</a>
        </div>
        <br />
        <a href="/products">Back to Products</a>
      </div>
    </div>
  );
};

export default Cart;
