import { useState } from "react";
import "./App.css";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  ButtonGroup,
  CssBaseline,
  TextField,
  Box,
} from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <CssBaseline />
      <Navbar></Navbar>
      <section>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </section>
    </main>
  );
}

function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px",
      }}
    >
      <Button to="/" component={Link} variant="text">
        Logo
      </Button>
      <ButtonGroup variant="contained">
        <Button to="/login" component={Link} variant="text">
          Login
        </Button>
        <Button to="/register" component={Link}>
          Register
        </Button>
      </ButtonGroup>
    </Box>
  );
}

function Home() {
  return <Typography variant="h4">Home Page</Typography>;
}

function Login() {
  return <Typography variant="h4">Login Page</Typography>;
}

function Register() {
  return (
    <Box>
      <Typography variant="h4">Register Page</Typography>
      <TextField variant="standard" label="Username" />
      <TextField variant="standard" label="Password" />
    </Box>
  );
}

export default App;
