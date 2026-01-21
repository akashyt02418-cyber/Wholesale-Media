import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import "./Shop.css";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(3000);

  // 🔹 FILTER LOGIC (optimized)
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const priceMatch = product.price <= maxPrice;

      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, maxPrice]);

  // 🔹 RESET FILTERS
  const resetFilters = () => {
    setSelectedCategory("All");
    setMaxPrice(3000);
  };

  return (
    <div className="shop-page">
      {/* ===== FILTER SIDEBAR ===== */}
      <aside className="filters">
        <h3>Filters</h3>

        {/* CATEGORY */}
        <div className="filter-section">
          <h4>Category</h4>
          {["All", "Men", "Women", "Kids"].map((cat) => (
            <label key={cat}>
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
              />
              {cat}
            </label>
          ))}
        </div>

        {/* PRICE */}
        <div className="filter-section">
          <h4>Max Price: ₹{maxPrice}</h4>
          <input
            type="range"
            min="100"
            max="3000"
            step="100"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        {/* RESET */}
        <button className="reset-btn" onClick={resetFilters}>
          Reset Filters
        </button>
      </aside>

      {/* ===== PRODUCTS GRID ===== */}
      <section className="shop-products">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.img} alt={product.name} />
                <h4>{product.name}</h4>
                <p>₹{product.price}</p>
              </Link>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default Shop;
