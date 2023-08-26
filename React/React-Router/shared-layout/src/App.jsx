import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
      <footer>Footer</footer>
    </main>
  );
}

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
      <div className="login-register">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
}
function Home() {
  return <h1>Home Page</h1>;
}
function Create() {
  return <h1>Create Page</h1>;
}
function Login() {
  return <h1>Login Page</h1>;
}
function Register() {
  return <h1>Register Page</h1>;
}
function Error() {
  return <h1>404 Error</h1>;
}

export default App;
