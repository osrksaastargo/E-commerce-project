import React from "react";
import "./ThankuPage.css";

const ThankuPage = () => {
  return (
    <div>
      <div class="content">
        <div class="wrapper-1">
          <div class="wrapper-2">
            <h1>Thank you !</h1>
            <p>Thanks for subscribing to our news letter. </p>
            <p>you should receive a confirmation email soon </p>
            <br />
            <a href="/" class="go-home">
              go home
            </a>
          </div>
          <div class="footer-like">
            <p>
              Email not received?
              <a>Click here to send again</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankuPage;
