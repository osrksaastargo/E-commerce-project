import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <h3>Our Products</h3>
      <div className="container">
        <div className="item-container">
          <div>
            <img
              className="marketing-img"
              src="./images/2_may_3.jpg"
              alt="marketing"
            />
            <h6>Product Name</h6>
            <div className="rate">
              <span>$ 300</span>
              <div className="star">
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
              </div>
            </div>
            <p>this is a description</p>
          </div>
          <div>
            <img
              className="marketing-img"
              src="./images/774.jpg"
              alt="marketing"
            />
            <h6>Product Name</h6>
            <div className="rate">
              <span>$ 300</span>
              <div className="star">
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
              </div>
            </div>
            <p>this is a description</p>
          </div>
          <div>
            <img
              className="marketing-img"
              src="./images/330.jpg"
              alt="marketing"
            />
            <h6>Product Name</h6>
            <div className="rate">
              <span>$ 300</span>
              <div className="star">
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
              </div>
            </div>
            <p>this is a description</p>
          </div>
        </div>
        <div className="item-container">
          <div>
            <img
              className="marketing-img"
              src="./images/778.jpg"
              alt="marketing"
            />
            <h6>Product Name</h6>
            <div className="rate">
              <span>$ 300</span>
              <div className="star">
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
              </div>
            </div>
            <p>this is a description</p>
          </div>
          <div>
            <img
              className="marketing-img"
              src="./images/Business-Social-Media-Banner-06.jpg"
              alt="marketing"
            />
            <h6>Product Name</h6>
            <div className="rate">
              <span>$ 300</span>
              <div className="star">
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
              </div>
            </div>
            <p>this is a description</p>
          </div>
          <div>
            <img
              className="marketing-img"
              src="./images/Business-Social-Media-Banner-20.jpg"
              alt="marketing"
            />
            <h6>Product Name</h6>
            <div className="rate">
              <span>$ 300</span>
              <div className="star">
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
                <img src="./images/star.png" alt="star" />
              </div>
            </div>
            <p>this is a description</p>
          </div>
        </div>
      </div>
      <button>
        <a href="/product">Add Products</a>
      </button>
    </div>
  );
};

export default Product;
