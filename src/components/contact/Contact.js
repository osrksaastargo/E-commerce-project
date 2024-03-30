import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contactUs">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          Please feel free to reach out to us via the contact form below or
          directly through the provided email address. We value your feedback,
          inquiries, and suggestions, and our team is committed to promptly
          addressing any concerns or questions you may have.
        </p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <img src="./images/pin_9774724.png" alt="user" />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>Bangalore</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <img src="./images/phone-call_4213179.png" alt="user" />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+01 1234567890</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <img src="./images/contact_11386806.png" alt="user" />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>email@g.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="required"></textarea>
              <span>Type Your Message....</span>
            </div>
            <div className="inputBox">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
