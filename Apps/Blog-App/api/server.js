const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PORT = 3000;

const connectionString =
  "mongodb+srv://diptobiswasanime4:abcd1234@cluster0.fljv3fw.mongodb.net/blog-1?retryWrites=true&w=majority";

const SECRET_KEY = "s3cr3tk3y";

async function connectDB(url) {
  return mongoose.connect(url);
}

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Blog App Home Page" });
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  try {
    const UserDoc = await User.create({ username, password: hashPassword });
    res.json({ msg: "Registered.", data: UserDoc });
  } catch (err) {
    res.status(400).json({ msg: "Not Registered", error: err });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const UserDoc = await User.findOne({ username });
  const passOk = await bcrypt.compare(password, UserDoc.password);
  if (passOk) {
    jwt.sign({ username, id: UserDoc._id }, SECRET_KEY, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json(token);
    });
  } else {
    res.json({ msg: "Wrong credentials!" });
  }
});

async function start() {
  try {
    await connectDB(connectionString);
    app.listen(PORT, () => {
      console.log(`App running on PORT ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
