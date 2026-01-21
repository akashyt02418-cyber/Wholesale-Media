import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [showRecent, setShowRecent] = useState(false);

  const navigate = useNavigate();

  // ✅ CART COUNT
  const { cartCount } = useCart();

  // Load recent searches
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(saved);
  }, []);

  const handleSearch = (value = search) => {
    if (value.trim() === "") return;

    const updated = [
      value,
      ...recentSearches.filter((item) => item !== value),
    ].slice(0, 5);

    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));

    navigate(`/search?q=${value}`);
    setMenuOpen(false);
    setShowRecent(false);
  };

  const handleRecentClick = (item) => {
    setSearch(item);
    handleSearch(item);
  };

  return (
    <div className="nav">
      {/* LOGO */}
      <div className="nav-logo">Wholesale Media</div>

      {/* DESKTOP SEARCH */}
      <div className="search-box desktop-search">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setShowRecent(true)}
          onBlur={() => setTimeout(() => setShowRecent(false), 150)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <FaSearch className="search-icon" onClick={() => handleSearch()} />

        {/* RECENT SEARCHES */}
        {showRecent && recentSearches.length > 0 && (
          <div className="recent-searches">
            <p>Recent Searches</p>
            {recentSearches.map((item, index) => (
              <span key={index} onClick={() => handleRecentClick(item)}>
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {/* MOBILE SEARCH */}
        <li className="mobile-search">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <FaSearch
              className="search-icon"
              onClick={() => handleSearch()}
            />
          </div>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">Home</Link>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <Link to="/shop">Shop</Link>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <Link to="/categories">Categories</Link>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <Link to="/deals">Deals</Link>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <Link to="/new-arrivals">New Arrivals</Link>
        </li>
      </ul>
      {/* ICONS */}
      <div className="nav-icons">
        {/* 🛒 CART WITH BADGE */}
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </Link>

        <Link to="/user">
          <FaUser />
        </Link>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
