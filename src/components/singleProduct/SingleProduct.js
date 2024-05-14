import React, { useState } from "react";
import axios from "axios";
import "./SingleProduct.css";

const SingleProduct = () => {
  const [file, setFile] = useState();
  const [ProductName, setProductName] = useState("");
  const [DetailDesc, setDetailDesc] = useState("");
  const [Dimension, setDimension] = useState("small");
  const [BasePrice, setBasePrice] = useState(0);
  const [TaxAmount, setTaxAmount] = useState(0);
  const [FinalPrice, setFinalPrice] = useState(0);
  const [DiscountAmount, setDiscountAmount] = useState(0);
  const [StockQuantity, setStockQuantity] = useState(0);
  const [ProductStatus, setProductStatus] = useState("Available");
  const [CategoryID, setCategoryID] = useState("");
  const [HSNID, setHSNID] = useState(0);
  const [Code, setCode] = useState(generateRandomCode());
  const [displayDetails, setDisplayDetails] = useState([]);

  const handleNameChange = (event) => {
    setProductName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDetailDesc(event.target.value);
  };

  const handleSizeChange = (event) => {
    setDimension(event.target.value);
  };

  const handlePricingChange = (event) => {
    setBasePrice(event.target.value);
  };

  const handleTaxAmountChange = (event) => {
    setTaxAmount(event.target.value);
  };
  const handleDiscountAmountChange = (event) => {
    setDiscountAmount(event.target.value);
  };
  const handleFinalPriceChange = (event) => {
    setFinalPrice(event.target.value);
  };
  const handleProductStatusChange = (event) => {
    setProductStatus(event.target.value);
  };
  const productStatusOptions = {
    Available: "Available",
    OutofStock: "Out of Stock",
  };

  const handleStockQuantityChange = (event) => {
    setStockQuantity(event.target.value);
  };

  const handleCategoryIDChange = (event) => {
    setCategoryID(event.target.value);
  };
  const handleHSNIDChange = (event) => {
    setHSNID(event.target.value);
  };
  const handleCodeChange = () => {
    setCode(Code);
  };

  function generateRandomCode() {
    return Math.floor(10000 + Math.random() * 90000);
  }
  // const handleRatingChange = (event) => {
  //   setRating(event.target.value);
  // };

  // const renderRatingStars = () => {
  //   const stars = [];
  //   for (let i = 1; i <= 5; i++) {
  //     if (i <= rating) {
  //       stars.push(
  //         <img
  //           className="rating"
  //           key={i}
  //           src="./images/star_11734042.png"
  //           alt={`Star ${i}`}
  //         />
  //       );
  //     } else {
  //       stars.push(
  //         <img
  //           className="rating"
  //           key={i}
  //           src="./images/star_1828970.png"
  //           alt={`Star ${i}`}
  //         />
  //       );
  //     }
  //   }
  //   return stars;
  // };

  const handleDisplayDetails = async () => {
    try {
      if (
        ProductName !== "" &&
        DetailDesc !== "" &&
        file &&
        BasePrice !== 0
        // rating !== 0
      ) {
        const formData = new FormData();
        formData.append("ProductName", ProductName);
        formData.append("DetailDesc", DetailDesc);
        formData.append("ProductImage", file);
        formData.append("Dimension", Dimension);
        formData.append("BasePrice", BasePrice);
        formData.append("Code", Code);
        formData.append("TaxAmount", TaxAmount);
        formData.append("FinalPrice", FinalPrice);
        formData.append("DiscountAmount", DiscountAmount);
        formData.append("StockQuantity", StockQuantity);
        formData.append("CategoryID", CategoryID);
        formData.append("HSNID", HSNID);
        formData.append("ProductStatus", ProductStatus);

        // formData.append("productRating", rating);

        const response = await axios.post(
          "http://localhost:4000/api/products",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const responseData = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setDisplayDetails(responseData);
      } else {
        alert("Please fill all the fields");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Error creating product. Please try again.");
    }
  };

  return (
    <div className="singleProduct">
      <div className="container">
        <h1>Add Product</h1>
        <label htmlFor="ProductName">Product Name:</label>
        <input
          type="text"
          id="ProductName"
          value={ProductName}
          onChange={handleNameChange}
        />
        <label htmlFor="DetailDesc">Product Description:</label>
        <textarea
          id="DetailDesc"
          value={DetailDesc}
          onChange={handleDescriptionChange}
        />
        <label htmlFor="ProductImage">Product Image:</label>
        <input
          type="file"
          id="ProductImage"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <label htmlFor="Dimension">Size:</label>
        <select id="Dimension" value={Dimension} onChange={handleSizeChange}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="thumbnail">Thumbnail</option>
        </select>

        <label htmlFor="BasePrice">Base Pricing:</label>
        <input
          type="number"
          id="BasePrice"
          value={BasePrice}
          onChange={handlePricingChange}
        />

        <label htmlFor="TaxAmount">TaxAmount: </label>
        <input
          type="number"
          id="TaxAmount"
          value={TaxAmount}
          onChange={handleTaxAmountChange}
        />
        <label htmlFor="FinalPrice">FinalPrice:</label>
        <input
          type="number"
          id="FinalPrice"
          value={FinalPrice}
          onChange={handleFinalPriceChange}
        />
        <label htmlFor="DiscountAmount">DiscountAmount:</label>
        <input
          type="number"
          id="DiscountAmount"
          value={DiscountAmount}
          onChange={handleDiscountAmountChange}
        />

        <label htmlFor="ProductStatus">ProductStatus:</label>
        <select
          id="ProductStatus"
          value={ProductStatus}
          onChange={handleProductStatusChange}
        >
          {Object.values(productStatusOptions).map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <label htmlFor="StockQuantity">StockQuantity:</label>
        <input
          type="number"
          id="StockQuantity"
          value={StockQuantity}
          onChange={handleStockQuantityChange}
        />

        <label htmlFor="CategoryID">CategoryID:</label>
        <input
          type="number"
          id="CategoryID"
          value={CategoryID}
          onChange={handleCategoryIDChange}
        />
        <label htmlFor="HSNID">HSNID:</label>
        <input
          type="number"
          id="HSNID"
          value={HSNID}
          onChange={handleHSNIDChange}
        />
        <label htmlFor="Code">Code:</label>
        <input
          type="number"
          id="Code"
          value={Code}
          onChange={handleCodeChange}
        />

        {/* <label htmlFor="productRating">Rating:</label>
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
        </div> */}

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
        {displayDetails.map((product) => (
          <div key={product.id}>
            <h3>{product.ProductName}</h3>
            <p>{product.DetailDesc}</p>
            <img
              src={`http://localhost:4000/uploads/${product.ProductImage}`}
              alt={product.ProductName}
            />
            <p>Size: {product.Dimension}</p>
            <p>BasePrice: Rs.{product.BasePrice} /-</p>
            <p>TaxAmount: Rs.{product.TaxAmount} /-</p>
            <p>FinalPrice: Rs.{product.FinalPrice} /-</p>
            <p>StockQuantity: {product.StockQuantity}</p>
            <p>ProductStatus: {product.ProductStatus}</p>
            <p>CategoryID: {product.CategoryID}</p>
            <p>HSNID: {product.HSNID} </p>
            <p>Code: {product.Code} </p>

            {/* <div className="rating-container">
              <span>Rating: </span>
              {renderRatingStars(product.productRating)}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;
