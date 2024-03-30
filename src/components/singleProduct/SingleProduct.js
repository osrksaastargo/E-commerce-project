import React, { useState } from "react";
import "./SingleProduct.css";

const SingleProduct = () => {
  const [file, setFile] = useState();
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [selectedSize, setSelectedSize] = useState("small");
  const [pricing, setPricing] = useState(0);
  const [rating, setRating] = useState(0);
  const [displayDetails, setDisplayDetails] = useState(false);

  const getFile = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handlePricingChange = (event) => {
    setPricing(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const renderRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <img
            className="rating"
            key={i}
            src="./images/star_11734042.png"
            alt={`Star ${i}`}
          />
        );
      } else {
        stars.push(
          <img
            className="rating"
            key={i}
            src="./images/star_1828970.png"
            alt={`Star ${i}`}
          />
        );
      }
    }
    return stars;
  };

  const handleDisplayDetails = () => {
    if (
      productName !== "" &&
      productDescription !== "" &&
      file &&
      pricing !== 0 &&
      rating !== 0
    ) {
      setDisplayDetails(true);
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="singleProduct">
      <div className="container">
        <h1>Add Product</h1>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={handleNameChange}
        />
        <label htmlFor="productDescription">Product Description:</label>
        <textarea
          id="productDescription"
          value={productDescription}
          onChange={handleDescriptionChange}
        />
        <label htmlFor="productImage">Product Image:</label>
        <input type="file" id="productImage" onChange={getFile} />

        <label htmlFor="productSize">Size:</label>
        <select
          id="productSize"
          value={selectedSize}
          onChange={handleSizeChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="thumbnail">Thumbnail</option>
        </select>

        <label htmlFor="productPricing">Pricing:</label>
        <input
          type="number"
          id="productPricing"
          value={pricing}
          onChange={handlePricingChange}
        />

        <label htmlFor="productRating">Rating:</label>
        <div id="productRating">
          <input
            type="radio"
            name="rating"
            value="1"
            onChange={handleRatingChange}
          />
          <span>1 Stars</span>
          <input
            type="radio"
            name="rating"
            value="2"
            onChange={handleRatingChange}
          />
          <span>2 Stars</span>

          <input
            type="radio"
            name="rating"
            value="3"
            onChange={handleRatingChange}
          />
          <span>3 Stars</span>
          <input
            type="radio"
            name="rating"
            value="4"
            onChange={handleRatingChange}
          />
          <span>4 Stars</span>
          <input
            type="radio"
            name="rating"
            value="5"
            onChange={handleRatingChange}
          />
          <span>5 Stars</span>
        </div>

        <button
          style={{
            marginTop: "10px",
            backgroundColor: "green",
            color: "black",
            border: "none",
            borderRadius: "3px",
            width: "120px",
            height: "auto",
            cursor: "pointer",
          }}
          onClick={handleDisplayDetails}
        >
          Display Details
        </button>
      </div>
      <div className="right-container">
        {displayDetails && (
          <div>
            <h1>Product Detail</h1>
            <h4>productName:{productName}</h4>
            <p>productDescription:{productDescription}</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <b>Product Image</b>
              <img
                src={file}
                alt="product"
                style={{
                  borderRadius: "20px",
                  width:
                    selectedSize === "small"
                      ? "150px"
                      : selectedSize === "medium"
                      ? "250px"
                      : selectedSize === "thumbnail"
                      ? "50px"
                      : "350px",
                  height: "auto",
                }}
              />
            </div>
            <h3>SelectedSize:{selectedSize}</h3>
            <p>Pricing: Rs.{pricing} /-</p>
            <div className="rating-container">
              <span style={{ marginTop: "20px" }}>Rating: </span>
              {renderRatingStars()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
