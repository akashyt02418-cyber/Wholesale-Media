import React from "react";
import "./NewArrivals.css";

const newProducts = [
  {
    id: 1,
    name: "Premium Hoodie",
    price: 1599,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 2199,
    image: "https://images.unsplash.com/photo-1585386959984-a41552231658"
  },
  {
    id: 3,
    name: "Stylish Backpack",
    price: 1299,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 2499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  }
];

function NewArrivals() {
  return (
    <div className="new-container">
      <h1 className="new-title">🆕 New Arrivals</h1>

      <div className="new-grid">
        {newProducts.map((product) => (
          <div className="new-card" key={product.id}>
            <div className="new-badge">NEW</div>
            <img src={product.image} alt={product.name} />

            <div className="new-info">
              <h2>{product.name}</h2>
              <p className="new-price">₹{product.price}</p>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;