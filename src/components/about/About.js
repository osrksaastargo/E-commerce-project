import React from "react";
import "./About.css";

const About = () => {
  return (
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
  );
};

export default About;
