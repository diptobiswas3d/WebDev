import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <main>
      <nav>
        <Link to="/" className="logo">
          Logo
        </Link>
        <div className="login-register">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
