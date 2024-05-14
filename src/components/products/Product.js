import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortType, setSortType] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts(searchQuery);
  }, [products, searchQuery]);

  const filterProducts = (searchQuery) => {
    if (!searchQuery) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.ProductName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const sortProducts = (type) => {
    setSortType(type);
    let sortedProducts = [...filteredProducts];
    if (type === "price-low-to-high") {
      sortedProducts.sort((a, b) => a.FinalPrice - b.FinalPrice);
    } else if (type === "price-high-to-low") {
      sortedProducts.sort((a, b) => b.FinalPrice - a.FinalPrice);
    }
    setFilteredProducts(sortedProducts);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/products");
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const productsRows = [];
  for (let i = 0; i < products.length; i += 2) {
    const row = (
      <div className="row" key={i}>
        <div className="column">
          {filteredProducts[i] && <ProductItem product={filteredProducts[i]} />}
        </div>
        <div className="column">
          {filteredProducts[i + 1] && (
            <ProductItem product={filteredProducts[i + 1]} />
          )}
        </div>
      </div>
    );
    productsRows.push(row);
  }

  return (
    <div className="product">
      <h3>Our Products</h3>
      <div className="filter-sort">
        <input
          type="text"
          placeholder="Search by Product Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={sortType} onChange={(e) => sortProducts(e.target.value)}>
          <option value="default">Sort by</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
        </select>
      </div>
      {productsRows}
      <button>
        <a href="/product">Add Products</a>
      </button>
    </div>
  );
};

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  // const renderRatingStars = (rating) => {
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

  const addToCart = async () => {
    const productName = product["ProductName"];
    try {
      const userId = localStorage.getItem("userId");
      const cartData = {
        productId: product["ProductID"], // Assuming _id is the product's ID
        userId: userId,
        productName: productName,
        quantity: quantity,
        totalPrice: product["FinalPrice"] * quantity, //
      };

      const response = await axios.post(
        "http://localhost:4000/api/cart/add",
        cartData
      );
      window.location.reload();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const addToWishlist = async () => {
    const productName = product["productName"];
    const productDescription = product["productDescription"];
    const productPricing = product["productPricing"];
    const productRating = product["productRating"];
    const productImage = product["productImage"];
    const productSize = product["productSize"];

    try {
      const userId = localStorage.getItem("userId");
      const wishlistData = {
        productId: product["id"], // Assuming _id is the product's ID
        userId: userId,
        productName: productName,
        productDescription: productDescription,
        productImage: productImage,
        productPricing: productPricing,
        productRating: productRating,
        productSize: productSize,
      };

      const response = await axios.post(
        "http://localhost:4000/api/wishlist/add",
        wishlistData
      );
      window.location.reload();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="container">
      <h3>productName: {product.ProductName}</h3>
      <p>productDescription: {product.DetailDesc}</p>
      <img
        className="marketing-img"
        src={`http://localhost:4000/uploads/${product.ProductImage}`}
        alt={product.ProductName}
      />
      <p>Size: {product.Dimension}</p>
      <p className="rate">Pricing: Rs.{product.BasePrice} /-</p>
      <p className="rate">TaxAmount: Rs.{product.TaxAmount} /-</p>
      <p className="rate">FinalPrice: Rs.{product.FinalPrice} /-</p>
      <p>StockQuantity: {product.StockQuantity}</p>
      <p>ProductStatus: {product.ProductStatus}</p>
      <p>CategoryID: {product.CategoryID}</p>
      <p>HSNID: {product.HSNID}</p>
      <p>Code: {product.Code}</p>

      {/* <div className="rating-container">
        <span>Rating: </span>
        {renderRatingStars(product.productRating)}
      </div> */}
      <div className="add-to-cart">
        <button className="plus" onClick={() => setQuantity(quantity + 1)}>
          +
        </button>

        <span className="quantity">{quantity}</span>
        <button
          className="minus"
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 0}
        >
          -
        </button>
        <button onClick={addToCart}>Add to Cart</button>
        <button className="wishlistButton" onClick={addToWishlist}>
          <img
            className="wish"
            src="./images/love_1029183.png"
            alt="wishlistItem"
          />
        </button>
      </div>
    </div>
  );
};

export default Product;