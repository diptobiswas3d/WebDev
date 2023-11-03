import { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      desc
      completed
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($desc: String!) {
    addTodo(desc: $desc) {
      id
      desc
      completed
    }
  }
`;

const TOGGLE_TODO = gql`
  mutation ToggleTodoCompleted($id: ID!) {
    toggleTodoCompleted(id: $id) {
      id
      completed
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;

function TodoList() {
  const [todoText, setTodoText] = useState("");
  const { data, refetch } = useQuery(GET_TODOS);
  const [addTodo] = useMutation(ADD_TODO);
  const [toggleTodoCompleted] = useMutation(TOGGLE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  const handleAddTodo = async () => {
    if (todoText.trim() === "") return;
    await addTodo({
      variables: { desc: todoText },
    });
    setTodoText("");
    refetch();
  };

  const handleToggleTodo = async (id) => {
    await toggleTodoCompleted({
      variables: { id },
    });
    refetch();
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo({
      variables: { id },
    });
    refetch();
  };

  return (
    <div className="">
      <input
        className="border p-1 ml-8 text-xl rounded-md shadow-md"
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add todo"
      />
      <button
        className="text-white ml-2 mr-8 rounded-md text-lg px-3 py-1 bg-blue-700 hover:bg-blue-500"
        onClick={handleAddTodo}
      >
        Add
      </button>

      {data && data.todos.length > 0 ? (
        <div className="flex flex-col gap-4 mt-8">
          {data.todos.map((todo) => (
            <div
              className="flex justify-between shadow-md bg-blue-200 p-2 rounded-lg"
              key={todo.id}
            >
              <label className="flex items-center gap-2 text-xl">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                />
                {todo.desc}
              </label>
              <button
                className="bg-red-600 hover:bg-red-500 shadow text-white py-1 px-2 rounded-md"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No todos yet!</p>
      )}
    </div>
  );
}

export default TodoList;
