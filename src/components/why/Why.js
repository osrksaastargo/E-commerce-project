import React from "react";
import "./Why.css";

const Why = () => {
  return (
    <div className="why">
      <h2>Why Choose Us</h2>
      <div className="container">
        <div className="box">
          <img src="./images/truck_713311.png" alt="truck" />
          <h3>Fast Delivery</h3>
          <p>
            Swiftly delivering your orders with precision and care. Our fast
            delivery ensures your satisfaction, every time. Trust us to bring
            your products to your doorstep promptly.
          </p>
        </div>
        <div className="box">
          <img src="./images/logistics_4363531.png" alt="logistics" />
          <h3>Free Shiping</h3>
          <p>
            Enjoy the convenience of free shipping on all orders. From small
            packages to large parcels, we cover the shipping costs for you. Shop
            without worries and let us handle the delivery expenses.
          </p>
        </div>
        <div className="box">
          <img src="./images/ribbon_1378577.png" alt="quality" />
          <h3>Best Quality</h3>
          <p>
            Experience unparalleled quality with our products. Crafted with
            precision and attention to detail, we guarantee the finest
            standards. Trust us for the best quality that exceeds expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
