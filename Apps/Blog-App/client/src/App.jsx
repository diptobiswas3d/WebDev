import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Post from "./pages/Post";
import Navbar from "./pages/Navbar";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
