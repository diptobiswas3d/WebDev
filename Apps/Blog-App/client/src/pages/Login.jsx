import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const url = "http://localhost:3000/login";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function login(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };
    const resp = await fetch(url, options);
    const data = await resp.json();
    if (resp.ok) {
      setRedirect(true);
    }
  }
  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <form className="login">
      <h2>New User? Please Login.</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Submit</button>
    </form>
  );
}

export default Login;
