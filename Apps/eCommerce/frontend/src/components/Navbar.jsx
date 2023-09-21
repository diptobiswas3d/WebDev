import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [productName, setProductName] = useState("");
  return (
    <nav className="navbar bg-blue-950 text-white text-xl p-2 flex justify-between">
      <Link to={"productlist"}>logo</Link>
      <input
        type="text"
        placeholder="Enter product info"
        className="input-product text-black w-1/2 px-1 py-1 rounded"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <div className="account flex">
        <h2 className="signup">Signup</h2>
        <h2 className="signin mx-2">Signin</h2>
        <Link to={"cart"}>Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
