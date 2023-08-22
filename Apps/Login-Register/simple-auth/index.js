const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

const PORT = 3000;

app.use(express.json());

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
  res.send(users);
});

app.post("/register", async (req, res) => {
  let salt = await bcrypt.genSalt();
  let hashPassword = await bcrypt.hash(req.body.password, salt);
  let user = { username: req.body.username, password: hashPassword };
  users.push(user);
  res.send("Registered!");
});

app.post("/login", async (req, res) => {
  let user = users.find((user) => user.username == req.body.username);
  if (!user) {
    res.send("User not found.");
  } else {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Login successful.");
    } else {
      res.send("Invalid password.");
    }
  }
});

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});
