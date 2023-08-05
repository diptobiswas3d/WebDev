import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  return (
    <>
      <div className="btn-container">
        <div className="btn" id="btn-minus" onClick={() => setCount(count - 1)}>
          Minus
        </div>
        <div className="btn" id="btn-reset" onClick={() => setCount(0)}>
          Reset
        </div>
        <div className="btn" id="btn-plus" onClick={increment}>
          Plus
        </div>
      </div>
      <h2 id="score">{count}</h2>
    </>
  );
}

function App() {
  return (
    <main>
      <h1>Counter</h1>
      <Counter></Counter>
    </main>
  );
}

export default App;
