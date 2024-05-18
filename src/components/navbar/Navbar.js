import React, { useEffect, useState } from "react";
import "./Navbar.css";
import axios from "axios";
const Navbar = () => {
  const [number, setNumber] = useState(0);
  const [wish, setWish] = useState(0);
  const token = localStorage.getItem("token");
  const [searchQuery, setSearchQuery] = useState("");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("cartData");
  };

  const userId = localStorage.getItem("userId");
  const getWishlist = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/wishlist/${userId}`
      );
      console.log(response.data); // Assuming response.data contains the cart items
      if (Array.isArray(response.data.data)) {
        setWish(response.data.data.length);
      } else {
        console.error(
          "Response data 'data' property is not an array:",
          response.data.data
        );
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const getCartItems = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/cart/${userId}`
      );
      console.log(response.data); // Assuming response.data contains the cart items
      if (Array.isArray(response.data.data)) {
        setNumber(response.data.data.length);
      } else {
        console.error(
          "Response data 'data' property is not an array:",
          response.data.data
        );
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleSearch = () => {
    console.log("Search Query:", searchQuery);
    window.location.href = `/${searchQuery}`;
  };

  useEffect(() => {
    getCartItems();
    getWishlist();
  }, [userId]);

  return (
    <>
      {token ? (
        <div className="navbar">
          <div className="upper-container">
            <div className="contact">
              <div className="call">
                <img src="./images/telephone-call_3059606.png" alt="call" />
                <span>Call:+01 1234567890</span>
              </div>
              <div className="call">
                <img src="./images/email_6244569.png" alt="email" />
                <span>Email:demo@gmail.com</span>
              </div>
            </div>
            <div className="search">
              <input
                type="search"
                placeholder="Search here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-button" onClick={handleSearch}>
                <img src="./images/magnifying-glass_5583199.png" alt="search" />
              </button>
            </div>
            <div className="account">
              <div className="call">
                <img src="./images/user_3237472.png" alt="user" />
                {token ? (
                  <a href="/login" onClick={handleLogout}>
                    <span>Logout</span>
                  </a>
                ) : (
                  <a href="/register">
                    <span>SignUp</span>
                  </a>
                )}
              </div>
              <div className="call">
                <img src="./images/trolley_4290854.png" alt="user" />
                <a href="/cart">
                  <span>Cart</span>
                </a>
                <span className="nav-cart-count">{number}</span>
              </div>
              <div className="call">
                <img src="./images/wishlist_7116028.png" alt="user" />
                <a href="/wishlist">
                  <span>WishList</span>
                </a>
                <span className="nav-cart-count">{wish}</span>
              </div>
            </div>
          </div>
          <div className="lower-container">
            <div className="logo">
              <img src="./images/cpu_9181075.png" alt="logo" />
            </div>
            <div className="nav-items">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/products">Products</a>
              <a href="/why-us">Why Us</a>
              <a href="/testimonial">Testimonial</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
