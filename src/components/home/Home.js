import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Login from "../signup/Login";

const Home = () => {
  const token = localStorage.getItem("token");
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const testimonialData = [
    {
      name: "Ajay",
      img: "./images/businessman-standing-showing-business-growth-graph-looking-camera-showing-thumb-up.jpg",
      p: "Exceptional service, impeccable quality, and prompt delivery—our experience with this company surpassed all expectations. Their attention to detail and commitment to customer satisfaction truly set them apart. Without hesitation, we highly recommend their services to anyone seeking excellence.",
      s: "Photographer",
    },
    {
      name: "JAMES",
      img: "./images/pexels-photo-2182970.jpg",
      p: "Working with this team was a game-changer for our business. Their expertise, professionalism, and dedication helped us achieve outstanding results. Trustworthy and reliable, they exceeded our every expectation. We're grateful for their partnership and look forward to continued success together.",
      s: "Photographer",
    },
    {
      name: "Tony",
      img: "./images/medium-shot-smiley-man-looking-tablet.jpg",
      p: "Choosing this company was the best decision we made for our project. From start to finish, their team demonstrated unparalleled expertise and passion for their work. Their seamless communication and innovative solutions ensured a smooth and successful outcome. We couldn't be happier with the results and highly recommend their services.",
      s: "Photographer",
    },
  ];

  const data = [
    {
      heading: "Welcome to our shop",
      img: "./images/shopping-cart-bags-black-background.jpg",
      description:
        "Welcome to our shop, where every visit promises a treasure trove of delights. Step into a world of exquisite craftsmanship and unparalleled quality. From unique trinkets to timeless classics, we curate a collection to captivate every taste. Experience shopping redefined with us.",
    },
    {
      heading: "Welcome to our shop",
      img: "./images/smartphone-with-glasses-tea-cup-flowers.jpg",
      description:
        "Discover a world of style and comfort at our online shop. From trendy apparel to cozy home essentials, we have everything to elevate your lifestyle. Shop now and experience the convenience of quality delivered to your doorstep.",
    },
    {
      heading: "Welcome to our shop",
      img: "./images/pexels-photo-7532110.jpg ",
      description:
        "Welcome to our online store, where convenience meets quality. Explore our curated selection of products designed to enhance your everyday life.",
    },
  ];

  return (
    <>
      {token ? (
        <div>
          <div className="home">
            <Slider {...settings}>
              {data.map((d) => (
                <div className="container">
                  <div>
                    <img src={d.img} alt="homeImg" />
                    <div className="home-data">
                      <h2>{d.heading}</h2>
                      <p>{d.description}</p>
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="about">
            <div className="container">
              <div className="about-section">
                <h3>We Provide Best For You</h3>
                <p>Totam architecto rem beatae veniam</p>
                <button>Read More</button>
              </div>
              <div>
                <img src="./images/about-img.jpg" alt="aboutImg" />
              </div>
            </div>
          </div>
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
          <div className="why">
            <h2>Why Choose Us</h2>
            <div className="container">
              <div className="box">
                <img src="./images/truck_713311.png" alt="truck" />
                <h3>Fast Delivery</h3>
                <p>
                  Swiftly delivering your orders with precision and care. Our
                  fast delivery ensures your satisfaction, every time. Trust us
                  to bring your products to your doorstep promptly.
                </p>
              </div>
              <div className="box">
                <img src="./images/logistics_4363531.png" alt="logistics" />
                <h3>Free Shiping</h3>
                <p>
                  Enjoy the convenience of free shipping on all orders. From
                  small packages to large parcels, we cover the shipping costs
                  for you. Shop without worries and let us handle the delivery
                  expenses.
                </p>
              </div>
              <div className="box">
                <img src="./images/ribbon_1378577.png" alt="quality" />
                <h3>Best Quality</h3>
                <p>
                  Experience unparalleled quality with our products. Crafted
                  with precision and attention to detail, we guarantee the
                  finest standards. Trust us for the best quality that exceeds
                  expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <h1>What Says Our Customers</h1>
            <Slider {...settings}>
              {testimonialData.map((d) => (
                <div>
                  <div className="container">
                    <img
                      src="./images/inverted-commas_7911135.png"
                      alt="test"
                    />
                    <p>{d.p}</p>
                  </div>
                  <div className="profile-container">
                    <div className="profile">
                      <img src={d.img} alt="profile" />
                    </div>
                    <div className="details">
                      <span>{d.name}</span>
                      <p>{d.s}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
