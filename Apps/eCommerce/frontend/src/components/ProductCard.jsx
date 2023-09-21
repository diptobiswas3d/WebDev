import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} target="_blank">
      <div className="product-card flex border border-blue-950 my-1 p-4 rounded-3xl bg-gray-100">
        <div className="left flex-1">
          <img
            className="product-img m-1 p-1 rounded-xl"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="right flex-1 m-1 p-1">
          <h1 className="product-title text-3xl">{product.title}</h1>
          <h2 className="product-desc text-lg">{product.description}</h2>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
