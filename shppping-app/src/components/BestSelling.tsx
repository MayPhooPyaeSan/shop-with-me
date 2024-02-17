import React from "react";
import { Carousel } from "react-bootstrap";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomArrow: React.FC<{
  onClick: () => void;
  direction: "left" | "right";
}> = ({ onClick, direction }) => {
  const arrowStyle: React.CSSProperties = {
    color: "#536730",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: 1,
    [direction]: "0",
    left: direction === "left" ? "0" : undefined,
    right: direction === "right" ? "0" : undefined,
  };

  return (
    <div className="custom-arrow" style={arrowStyle} onClick={onClick}>
      {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
    </div>
  );
};
const BestSelling = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" onClick={() => {}} />,
    prevArrow: <CustomArrow direction="left" onClick={() => {}} />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    {
      imageUrl:
        "https://i.pinimg.com/564x/db/02/66/db026695332ae7787557a0098f496ec7.jpg",
      name: "Comfortable Chair",
      price: "$23",
    },

    {
      imageUrl:
        "https://i.pinimg.com/736x/27/2b/be/272bbe5a7eecbf1cdf98c738fb4688c5.jpg",
      name: "Comfortable Chair",
      price: "$23",
    },
    {
      imageUrl:
        "https://i.pinimg.com/236x/d5/fa/2a/d5fa2a51958077ae68edc0cae980ab8d.jpg",
      name: "Comfortable Chair",
      price: "$23",
    },

    {
      imageUrl:
        "https://i.pinimg.com/564x/f6/b8/92/f6b892fc65ae0d5521b866e72a6cdc97.jpg",
      name: "Comfortable Chair",
      price: "$23",
    },

    {
      imageUrl:
        "https://i.pinimg.com/236x/6a/ff/be/6affbe959f634a5bd9bf75d952894fc3.jpg",
      name: "Comfortable Chair",
      price: "$23",
    },
  ];
  return (
    <div
      className="banner-container row"
      style={{ background: "none", padding: "0" }}
    >
      <div className="column col-8">
        <Carousel interval={2000} pause="hover">
          <Carousel.Item>
            <img className="d-block w-100" src={image6} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image7} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image8} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="column col-4">
        <div className="container" id="products">
          <h2 style={{ marginBottom: "2rem" }} className="title">
            Best Selling
          </h2>
          <Slider {...settings} className="image-slider">
            {products.map((product, index) => (
              <div key={index} className="custom-slide">
                <img
                  src={product.imageUrl}
                  alt={`image-${index}`}
                  className="image-slider small-image"
                />
                <div className="card-body">
                  <p>{product.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
