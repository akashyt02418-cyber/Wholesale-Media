import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Home() {
  const { addToCart } = useCart();

  // 🔹 CATEGORY STATE
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 🔹 CLOTHES PRODUCTS
  const products = [
    {
      id: 1,
      name: "Men Casual T-Shirt",
      price: 599,
      category: "Men",
      img: "src/assets/T-Shirt.webp",
    },
    {
      id: 2,
      name: "Men Denim Jeans",
      price: 1299,
      category: "Men",
      img: "src/assets/Denim-Jeans.webp",
    },
    {
      id: 3,
      name: "Women Floral Dress",
      price: 999,
      category: "Women",
      img: "src/assets/Floral-Dress.webp",
    },
    {
      id: 4,
      name: "Women Kurti",
      price: 999,
      category: "Women",
      img: "src/assets/Women-Kurti.webp",
    },
    {
      id: 5,
      name: "Kids Printed T-Shirt",
      price: 499,
      category: "Kids",
      img: "src/assets/Printed-T-Shirt.webp",
    },
    {
      id: 6,
      name: "Kids Shorts",
      price: 399,
      category: "Kids",
      img: "src/assets/kids-shorts.webp",
    },
  ];

  // 🔹 FILTER LOGIC
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
        (product) => product.category === selectedCategory
      );

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Fashion That Defines You</h1>
          <p>Trendy clothes for Men, Women & Kids</p>

          <Link to="/shop">
            <button className="hero-btn">Shop Now</button>
          </Link>
        </div>
      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="section">
        <h2 className="section-title">Shop By Category</h2>

        <div className="category-grid">
          <div
            className={`category-card ${selectedCategory === "All" ? "active" : ""}`}
            onClick={() => setSelectedCategory("All")}
          >
             All
          </div>

          <div
            className={`category-card ${selectedCategory === "Men" ? "active" : ""}`}
            onClick={() => setSelectedCategory("Men")}
          >
            Men
          </div>

          <div
            className={`category-card ${selectedCategory === "Women" ? "active" : ""}`}
            onClick={() => setSelectedCategory("Women")}
          >
            Women
          </div>

          <div
            className={`category-card ${selectedCategory === "Kids" ? "active" : ""}`}
            onClick={() => setSelectedCategory("Kids")}
          >
            Kids
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="section gray">
        <h2 className="section-title">Featured Collections</h2>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="product-img"
                />
                <h3>{product.name}</h3>
                <p className="price">₹{product.price}</p>
              </Link>

              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OFFER ================= */}
      <section className="offer">
        <h2> Flat 50% Off</h2>
        <p>On selected fashion items</p>
      </section>
    </div>
  );
}

export default Home;
