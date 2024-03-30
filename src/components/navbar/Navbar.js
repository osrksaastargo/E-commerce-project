import React from "react";
import "./Navbar.css";
const Navbar = () => {
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
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
              <input type="search" placeholder="Search here" />
              <button className="search-button">
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
                <span>CART</span>
                <span className="nav-cart-count">0</span>
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
