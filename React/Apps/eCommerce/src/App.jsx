import { useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="productlist" element={<ProductList />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </>
  );
}

function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function Home() {
  return (
    <>
      <h1 className="text-3xl">Home Page</h1>
    </>
  );
}
function ProductList() {
  return (
    <>
      <h1 className="text-3xl">ProductList Page</h1>
    </>
  );
}
function Cart() {
  return (
    <>
      <h1 className="text-3xl">Cart Page</h1>
    </>
  );
}

function Navbar() {
  return (
    <nav className="flex justify-between bg-green-800 p-2 text-white text-xl">
      <Link to="/productlist">logo</Link>
      <input
        className="rounded px-1"
        type="text"
        placeholder="Enter product info"
      />
      <div className="actions flex gap-1 mr-1">
        <Link to="/signin">Signin</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

function Error() {
  return (
    <>
      <h1 className="text-3xl my-2">404</h1>
      <h1 className="text-2xl mb-4">Page not found</h1>
      <Link to="/" className="bg-green-600 text-white p-1 text-xl rounded-xl">
        Home
      </Link>
    </>
  );
}

export default App;
