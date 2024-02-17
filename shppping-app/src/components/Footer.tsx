import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-section">
        <h6 style={{ textAlign: "center", padding: "20px" }}>The Studio.</h6>
        <p>Explore our elegant furniture collection.</p>
        <p>Terms and Services</p>
        <p>Privacy policy</p>
        <p>FAQ</p>
      </div>
      <div className="footer-section">
        <h6 style={{ padding: "20px" }}>Links</h6>
        <div className="links-div">
          <a href="http://">
            <p>Home</p>
          </a>
          <a href="http://">
            <p>Blog</p>
          </a>
          <a href="http://">
            <p>Products</p>
          </a>
          <a href="http://">
            <p>Contact</p>
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h6 style={{ textAlign: "center", padding: "20px" }}>Contact Us</h6>
        <div className="social-links">
          <a href="http://">
            <p>
              <FaFacebook color="white" />
            </p>
          </a>
          <a href="http://">
            <p>
              <FaInstagram color="white" />
            </p>
          </a>
          <a href="http://">
            <p>
              <FaLinkedin color="white" />
            </p>
          </a>
        </div>
        <p style={{ textAlign: "center" }}>Address: Chan Aye Thar Zan ,MDY</p>
        <p>Copyright information</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Footer;
