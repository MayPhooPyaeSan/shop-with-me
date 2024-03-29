import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div>
      <div className="navbar-container">
        <div>
          <div className="nav-logo">
            <h2>The Studio.</h2>
          </div>
        </div>
        <div className={`nav-items ${menuOpen ? "open" : ""}`}>
          <a href="" onClick={() => handleNavigation("home")}>
            Home
          </a>
          <a href="#" onClick={() => handleNavigation("products")}>
            Products
          </a>
          <a href="blog" onClick={() => handleNavigation("blog")}>
            Blog
          </a>
          <a href="" onClick={() => handleNavigation("contact")}>
            Contact
          </a>
          <a href="" onClick={() => handleNavigation("login")}>
            Login
          </a>
          <a href="" onClick={() => handleNavigation("cart")}>
            <FaShoppingCart />
          </a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <input type="checkbox" checked={menuOpen} readOnly />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Layout;
