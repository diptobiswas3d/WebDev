const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const uuid = require("uuid");
const cors = require("cors");

// Middlewares
app.use(bodyParser.json());
app.use(cors());

const todos = [
  {
    id: 1,
    desc: "Write Python code",
    completed: false,
  },
  {
    id: 2,
    desc: "Write JavaScript code",
    completed: true,
  },
];

// GET, POST, PUT, DELETE, PATCH
app.get("/", (req, res, next) => {
  res.send("Todo List Home Page");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  console.log(req.params.id);
  let todo = todos.filter((todo) => todo.id == req.params.id);
  res.json(todo);
});

app.post("/todos", (req, res) => {
  let body = req.body;
  console.log(body);
  todos.push({ id: uuid.v4(), ...body });
  res.json(todos);
});

app.put("/todos/:id", (req, res) => {
  let todo = todos.find((todo) => todo.id == req.params.id);
  if (todo) {
    todo.desc = req.body.desc;
    todo.completed = req.body.completed;
    res.json(todos);
  } else {
    res.send("Todo with given id doesn't exist");
  }
});

app.delete("/todos/:id", (req, res) => {
  let index = todos.findIndex((todo) => todo.id == req.params.id);
  todos.splice(index, 1);
  res.json(todos);
});

app.listen(port, () => {
  console.log("App is listening in PORT:", port);
});
