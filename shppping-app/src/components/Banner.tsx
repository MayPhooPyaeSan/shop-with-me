import React from "react";
import { Carousel } from "react-bootstrap";
import bannerImage from "../assets/discountimage.png";
import bannerImage2 from "../assets/discountimage2.png";
import bannerImage3 from "../assets/discountimage3.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="column">
        <p>Get 50% off your order !!</p>
        <h1>Deal Of The Day 🎉</h1>
        <button className="btn">Learn More</button>
      </div>
      <div className="column">
        <Carousel interval={2000} pause="hover">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bannerImage}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bannerImage2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bannerImage3}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
