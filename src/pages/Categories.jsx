import React from "react";
import "./Categories.css";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322"
  },
  {
    id: 3,
    name: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 4,
    name: "Gaming",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1"
  }
];

function Categories() {
  return (
    <div className="categories-container">
      <h1 className="categories-title">Shop by Categories</h1>

      <div className="categories-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img src={category.image} alt={category.name} />
            <div className="category-info">
              <h2>{category.name}</h2>
              <button className="shop-btn">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;