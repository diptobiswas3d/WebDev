import React from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({ productList }) {
  const [curPage, setCurPage] = useState(1);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10);
  const [minRating, setMinRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    ...new Set(productList.map((product) => product.category)),
  ];

  const itemsPerPage = 5;

  let filteredProducts = productList.filter(
    (product) =>
      (selectedCategory === "" || product.category === selectedCategory) &&
      product.price > minPrice &&
      product.price < maxPrice &&
      product.rating.rate > minRating
  );

  let totalPages = Math.ceil(productList.length / itemsPerPage);
  let startIndex = (curPage - 1) * itemsPerPage;
  let curProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  console.log(curProducts);
  return (
    <>
      <div className="product-list-container flex mx-2 my-2">
        <div className="options w-1/3 border border-gray-900 px-1 mx-1 bg-gray-200 rounded">
          Filters
          <div>
            <label>Category: </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Min Price: </label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div>
            <label>Max Price: </label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          <div>
            <label>Min Rating: </label>
            <input
              type="number"
              min="0"
              max="5"
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
            />
          </div>
        </div>
        <div className="list border border-gray-900 px-1 mx-1">
          {curProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
