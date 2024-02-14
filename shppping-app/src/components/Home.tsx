import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (route: any) => {
    navigate(route);
  };
  return (
    <div className="container">
      <div className="image">
        <img
          src="https://i.pinimg.com/564x/b7/e1/33/b7e133ca3971483d1f3a1ce562e073a5.jpg"
          alt="home-img"
          className="home-img"
        />
      </div>
      <div className="content">
        <h1>Welcome To The Studio .</h1>
        <p>
          Welcome to All About Fancy, your ultimate destination for chic and
          stylish finds! Explore our curated collection of must-have fashion
          pieces, accessories, and home decor. Get ready to indulge in luxury
          and elevate your shopping experience. Happy browsing!
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <a
            href=""
            onClick={() => handleCardClick("/blog")}
            style={{ textDecoration: "none" }}
          >
            <button>
              Learn More
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
