const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3000;

const sessions = {};

function isAuthenticated(req, res, next) {
  console.log("Authenticated");
  next();
}

app.use(cors());
app.use(bodyParser());

const users = [
  {
    username: "garyoak",
    password: "abcd1234",
  },
  {
    username: "ashketchum",
    password: "pikachu",
  },
  {
    username: "profoak",
    password: "pkmnprof",
  },
];

app.get("/", (req, res) => {
  res.send("Login Register Home Page");
});

app.get("/users", isAuthenticated, (req, res) => {
  res.json(users);
});

app.post("/users/register", (req, res) => {
  let user = req.body;

  let existingUser = users.find((user) => user.username == req.body.username);
  if (existingUser) {
    return res.json({ message: "Username taken!", registered: true });
  }

  users.push({ ...user });
  res.json({ message: "You're now registered." });
});

app.post("/users/login", (req, res) => {
  let user = req.body;
  let existingUser = users.find((user) => user.username == req.body.username);
  if (!existingUser) {
    return res.json({
      message: "Please register.",
      username: false,
      password: false,
    });
  } else {
    if (existingUser.password != user.password) {
      return res.json({
        message: "Incorrect password!",
        username: true,
        password: false,
      });
    } else {
      let sessionId = new Date().getTime().toString();
      sessions[sessionId] = user.username;
      console.log(sessions);
      return res.json({
        message: "You're now logged in.",
        username: true,
        password: true,
        sessionId: sessionId,
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
