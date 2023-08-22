// npm init
// npm i express bcrypt
// npm i -D nodemon
const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());

const PORT = 3000;

const users = [
  {
    username: "ashketchum",
    password: "pikachu",
  },
  {
    username: "garyoak",
    password: "eevee",
  },
];

app.get("/", (req, res) => {
  res.json(users);
});

app.post("/register", async (req, res) => {
  let hashPassword = await bcrypt.hash(req.body.password, 10);
  let user = { username: req.body.username, password: hashPassword };
  users.push(user);
  res.json(user);
});

app.post("/login", async (req, res) => {
  let user = users.find((user) => user.username == req.body.username);
  if (!user) {
    res.json({ msg: "User not found." });
  } else {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.json({ msg: "Login successful." });
    } else {
      res.json({ msg: "Invalid password." });
    }
  }
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
