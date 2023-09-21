import { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [productList, setProductList] = useState([]);
  const [totalItemsInCart, setTotalItemsInCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductList(json);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route
          path="/productlist"
          element={<ProductList productList={productList} />}
        ></Route>
        <Route
          path="/product/:productId"
          element={
            <ProductDetails
              productList={productList}
              totalItemsInCart={totalItemsInCart}
              setTotalItemsInCart={setTotalItemsInCart}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              productList={productList}
              totalItemsInCart={totalItemsInCart}
              setTotalItemsInCart={setTotalItemsInCart}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
