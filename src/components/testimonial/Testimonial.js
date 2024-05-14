import React from "react";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="testimonial">
      <h1>What Says Our Customers</h1>
      <Slider {...settings}>
        {testimonialData.map((d) => (
          <div>
            <div className="container">
              <img src="./images/inverted-commas_7911135.png" alt="test" />
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
  );
};

export default Testimonial;
