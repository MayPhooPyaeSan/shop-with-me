import React from "react";
import Carousel from "react-bootstrap/Carousel";
import homeimage1 from "../assets/homeimage1.jpg";
import homeimage2 from "../assets/homeimage2.jpg";
import homeimage3 from "../assets/homeimage3 (2).jpg";

const Home = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-image-class"
            src={homeimage1}
            alt="Living Room Furniture"
          />
          <Carousel.Caption>
            <h3>Stylish Living Room Furniture</h3>
            <p>
              Enhance your living space with our elegant furniture collection.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-image-class"
            src={homeimage2}
            alt="Bedroom Furniture"
          />
          <Carousel.Caption>
            <h3>Comfortable Bedroom Furniture</h3>
            <p>
              Create your dream bedroom with our cozy and stylish furniture
              pieces.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-image-class"
            src={homeimage3}
            alt="Dining Room Furniture"
          />
          <Carousel.Caption>
            <h3>Beautiful Dining Room Furniture</h3>
            <p>
              Transform your dining area with our exquisite dining room
              furniture sets.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
