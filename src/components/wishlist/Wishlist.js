import React, { useState, useEffect } from "react";
import "./Wishlist.css";
import axios from "axios"; // Import Axios for making HTTP requests

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const userId = localStorage.getItem("userId");

  const removeFromCart = async (wishlistItemId) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/wishlist/${wishlistItemId}`
      );
      getCartItems();
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const getCartItems = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/wishlist/${userId}`
      );
      setWishlist(response.data.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, [userId]);

  return (
    <div className="wish-container">
      <h2>Wishlist</h2>
      <table className="wish-table">
        <thead>
          <tr>
            <th>cartId</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Image</th>
            <th>Product Size</th>
            <th>Product Pricing</th>
            <th>Product Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>{item.productDescription}</td>
              <td>{item.productImage}</td>
              <td>{item.productSize}</td>
              <td>{item.productPricing}</td>
              <td>{item.productRating}</td>
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
      <div className="wish-buttons">
        <a href="/products">Back to Products</a>
      </div>
    </div>
  );
};

export default Wishlist;
