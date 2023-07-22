import { useState } from "react";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleInput(e) {
    setNewTodo(e.target.value);
  }

  function addTodo() {
    if (newTodo == "") return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  }

  function toggleCheckbox(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <main>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Enter Todo"
          value={newTodo}
          onChange={(e) => handleInput(e)}
        />
        <button id="add-todo" onClick={() => addTodo()}>
          +
        </button>
        <div className="todo-container">
          {todos.map((todo, index) => {
            return (
              <div className="todo" key={index}>
                <p>{todo.text}</p>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCheckbox(index)}
                />
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
