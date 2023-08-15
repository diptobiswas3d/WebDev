import { useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="body-section">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="games" element={<Games />}></Route>
          <Route path="shows" element={<Shows />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        logo
      </Link>
      <div className="links">
        <Link to="/games">Games</Link>
        <Link to="/shows">Shows</Link>
        <Link to="/about">About</Link>
      </div>
      <Link to="/signin" className="signin">
        Signin
      </Link>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h1>Contact Us</h1>
      <h2>abc123@gmail.com</h2>
      <h3>+91 98765 43210</h3>
    </div>
  );
}

function Home() {
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}
function Games() {
  return (
    <>
      <h1>Games Page</h1>
    </>
  );
}

function Shows() {
  return (
    <>
      <h1>Shows Page</h1>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About Page</h1>
    </>
  );
}

function Signin() {
  return (
    <>
      <h1>Signin Page</h1>
    </>
  );
}

function Error() {
  return (
    <>
      <div className="error">
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to="/" className="btn">
          Home Page
        </Link>
      </div>
    </>
  );
}

export default App;
