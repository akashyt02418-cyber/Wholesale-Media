import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import "./Product.css";

function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  // 🔹 Similar products (same category)
  const similarProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="product-page">
      {/* ===== PRODUCT DETAIL ===== */}
      <div className="product-detail">
        <img src={product.img} alt={product.name} />

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">₹{product.price}</p>
          <p className="desc">{product.description}</p>

          {/* ===== SIZE ===== */}
          <div className="option">
            <h4>Size</h4>
            <div className="option-list">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "active" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* ===== COLOR ===== */}
          <div className="option">
            <h4>Color</h4>
            <div className="color-list">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className={`color-circle ${
                    selectedColor === color ? "active" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <button
            className="add-btn"
            onClick={() =>
              addToCart({
                ...product,
                selectedSize,
                selectedColor,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* ===== SIMILAR PRODUCTS ===== */}
      <h2 className="similar-title">Similar Products</h2>

      <div className="similar-grid">
        {similarProducts.map((item) => (
          <div className="similar-card" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
