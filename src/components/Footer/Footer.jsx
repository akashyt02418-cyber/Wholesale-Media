import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-box">
          <h2 className="footer-logo">WholesaleMart</h2>
          <p>
            Best wholesale deals for retailers and resellers.
            Quality products at the best price.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="footer-box">
          <h3>Categories</h3>
          <ul>
            <li>Men</li>
            <li>Whomen</li>
            <li>kids</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-box">
          <h3>Contact</h3>
          <p>Email: support@wholesalemart.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} WholesaleMart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
