import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  // 🔹 Similar products (same category)
  const similarProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="product-detail">
      {/* ===== MAIN PRODUCT ===== */}
      <div className="detail-card">
        <img src={product.img} alt={product.name} />

        <div className="detail-info">
          <h1>{product.name}</h1>
          <p className="price">₹{product.price}</p>
          <p>{product.description}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* ===== SIMILAR PRODUCTS ===== */}
      <h2 className="similar-title">You may also like</h2>

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

export default ProductDetail;
