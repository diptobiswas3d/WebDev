import React from "react";
import { useState } from "react";

const url = "http://localhost:3000/register";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(e) {
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
    };
    const resp = await fetch(url, options);
    const data = await resp.json();
    if (resp.status !== 200) {
      console.log("Registration failed!");
    } else {
      console.log("Registration successful.");
    }

    console.log(resp);
    console.log(data);
  }
  return (
    <form className="register">
      <h2>New User? Please Register.</h2>
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
      <button onClick={register}>Submit</button>
    </form>
  );
}

export default Register;
