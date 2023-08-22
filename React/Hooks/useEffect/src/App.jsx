import { useEffect, useState } from "react";
import "./App.css";

function Counter() {
  const initialCount = Number(localStorage.getItem("counter"));
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
    localStorage.setItem("counter", count);
    return () => {
      localStorage.removeItem("counter");
    };
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
        <div className="btn" id="btn-plus" onClick={() => setCount(count + 1)}>
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
