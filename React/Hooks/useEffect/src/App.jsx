import { useEffect, useState } from "react";
import "./App.css";

function Counter() {
  const initialCount = Number(localStorage.getItem("count"));
  const [count, setCount] = useState(initialCount);

  function increment() {
    setCount(count + 1);
  }

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
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
