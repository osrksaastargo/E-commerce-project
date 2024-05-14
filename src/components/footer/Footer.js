import React from "react";
import "./Footer.css";

const Footer = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <div className="footer">
          <div className="footer-container">
            <div className="details">
              <img src="./images/cpu_9181075.png" alt="logo" />
              <div className="call">
                <img src="./images/pin_9774724.png" alt="user" />
                <span>Address</span>
              </div>
              <div className="call">
                <img src="./images/phone-call_4213179.png" alt="user" />
                <span>+01 1234567890</span>
              </div>
              <div className="call">
                <img src="./images/contact_11386806.png" alt="user" />
                <span>demo@gmail.com</span>
              </div>
            </div>
            <div className="information">
              <h3>Information</h3>
              <p>This is a information</p>
            </div>
            <div className="container">
              <h3>Useful Link</h3>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/products">Products</a>
              <a href="/why-us">Why Us</a>
              <a href="/testimonial">Testimonial</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="contact">
              <div className="contact-detail">
                <h3>Newsletter</h3>
                <input type="search" placeholder="Enter your email" />
                <button>SUBSCRIBE</button>
              </div>
              <div className="social">
                <img src="./images/facebook_5968764.png" alt="facebook" />
                <img src="./images/linkedin_145807.png" alt="linkedin" />
                <img src="./images/instagram_174855.png" alt="instagram" />
                <img src="./images/twitter_3670151.png" alt="twitter" />
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright">
            <div>
              <span className="copy">&copy;</span>
              <span>2023 ALL RIGHTS RESERVED</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Footer;
