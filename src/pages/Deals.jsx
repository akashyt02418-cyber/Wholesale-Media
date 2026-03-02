import React from "react";
import "./Deals.css";

const deals = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    oldPrice: 4999,
    image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 1999,
    oldPrice: 3499,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 899,
    oldPrice: 1499,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
  },
  {
    id: 4,
    name: "Sneakers",
    price: 2499,
    oldPrice: 3999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  }
];

function Deals() {
  return (
    <div className="deals-container">
      <h1 className="deals-title">🔥 Hot Deals</h1>

      <div className="deals-grid">
        {deals.map((item) => {
          const discount = Math.round(
            ((item.oldPrice - item.price) / item.oldPrice) * 100
          );

          return (
            <div className="deal-card" key={item.id}>
              <div className="discount-badge">-{discount}%</div>
              <img src={item.image} alt={item.name} />

              <div className="deal-info">
                <h2>{item.name}</h2>
                <p className="price">
                  ₹{item.price}
                  <span className="old-price">₹{item.oldPrice}</span>
                </p>
                <button className="buy-btn">Grab Deal</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Deals;