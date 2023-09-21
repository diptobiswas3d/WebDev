import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails({
  productList,
  totalItemsInCart,
  setTotalItemsInCart,
}) {
  const { productId } = useParams();
  const navigate = useNavigate();

  let product = productList.find((product) => product.id == productId);

  function addToCart() {
    setTotalItemsInCart((prevTotalItemsInCart) => [
      ...prevTotalItemsInCart,
      product,
    ]);
    console.log(totalItemsInCart);
    navigate(`/cart`);
  }
  return (
    <>
      <div className="top mx-2 my-2 flex">
        <img
          src={product.image}
          alt={product.title}
          className="top-left w-1/3"
        ></img>
        <div className="top-middle">
          <h1 className="product-title text-3xl">{product.title}</h1>
          <h2 className="product-desc text-lg">{product.description}</h2>
        </div>
        <div className="top-right w-1/3">
          <h2 className="product-stock-msg text-green-700 text-xl my-4">
            In Stock
          </h2>
          <button
            className="add-to-cart bg-violet-700 text-white text-lg rounded-xl"
            onClick={addToCart}
          >
            Add to Cart
          </button>
          <button className="save-for-later bg-green-700 text-white text-lg my-4 rounded-xl">
            Save for later
          </button>
        </div>
      </div>
      <div className="bottom my-4">
        <h1 className="customer-review-heading text-3xl text-center">
          Customer Reviews
        </h1>
        <div className="customer-review my-4 mx-4">
          <h2 className="text-xl">Name</h2>
          <h3>4.5</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, unde
            numquam. Sunt, odio eos vero qui corporis laborum facere autem.
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
