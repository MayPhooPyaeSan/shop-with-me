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

const NewArrival = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" onClick={() => {}} />,
    prevArrow: <CustomArrow direction="left" onClick={() => {}} />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
        "https://i.pinimg.com/564x/52/36/d8/5236d8d21d970840e0defb8cb4536b80.jpg",
      name: "Comfortable Chair",
      price: "$23",
    },

    {
      imageUrl:
        "https://i.pinimg.com/564x/eb/93/77/eb937762fb234f9fb482db069347b208.jpg",
      name: "Comfortable Chair",
      price: "$23",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/22/62/bd/2262bd55d4fe4401cca9bf9fc88c16fc.jpg",
      name: "Comfortable Chair",
      price: "$23",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/73/d4/bc/73d4bca433116e82c72a8e8ed4a9fe12.jpg",
      name: "Comfortable Chair",
      price: "$23",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/3c/82/2e/3c822ec434ad7b9559486e4be0aa4627.jpg",
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
        "https://i.pinimg.com/564x/46/72/27/467227c445b495131710291c689a37a3.jpg",
      name: "Comfortable Chair",
      price: "$23",
    },
  ];

  return (
    <div className="container" id="products">
      <h2 style={{ marginBottom: "2rem" }}>New Arrivals</h2>
      <Slider {...settings} className="image-slider">
        {products.map((products, index) => (
          <div key={index} className="custom-slide">
            <img
              src={products.imageUrl}
              alt={`image-${index}`}
              className="image-slider small-image"
            />
            <div className="card-body">
              <p>{products.name}</p>
              <p>{products.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrival;
