import React from "react";
import News from "./News";
import Footer from "./Footer";

const Blog = () => {
  return (
    <div>
      <div
        style={{
          padding: "20px",
          background: "#e8e5e0",
          maxWidth: "700px",
          margin: "0 auto",
          borderRadius: "5px",
        }}
      >
        <h1 style={{ textAlign: "center", padding: "10px" }}>About Us.</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://i.pinimg.com/564x/b6/f8/0e/b6f80e11afa5e85dbf9f48f46f59e61c.jpg"
            alt=""
            style={{
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
              width: "100%",
              maxWidth: "400px",
            }}
          />
        </div>
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            marginTop: "2rem",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          <p style={{ textAlign: "center", marginBottom: "1rem" }}>
            Our team is dedicated to curating a collection of furniture that
            combines style, comfort, and functionality. We believe that every
            piece of furniture should not only be beautiful but also practical
            and durable.
          </p>
          <p style={{ textAlign: "center", marginBottom: "1rem" }}>
            We at The Studio are passionate about helping you create a home that
            reflects your unique style and personality. Our mission is to
            provide you with elegant and high-quality furniture that enhances
            your living space.
          </p>
          <p style={{ textAlign: "center" }}>
            With a commitment to quality craftsmanship and customer
            satisfaction, we strive to exceed your expectations with every
            purchase. Explore our collection and let us help you transform your
            house into a home you love.
          </p>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  );
};

export default Blog;
