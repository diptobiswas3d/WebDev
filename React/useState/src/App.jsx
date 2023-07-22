import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <>
      <main>
        <h1 id="heading">Counter</h1>
        <h1 id="score">{count}</h1>
        <div className="btn-container">
          <button id="minus" onClick={decrement}>
            Minus
          </button>
          <button id="reset" onClick={reset}>
            Reset
          </button>
          <button id="plus" onClick={increment}>
            Plus
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
