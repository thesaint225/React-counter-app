import React from "react";
import { useState } from "react";

function Counting() {
  const [count, setCount] = useState(0);
  return (
    <section id="main">
      <div className="container">
        <h1>Counter App</h1>
        <h3>
          <span>{count}</span>
        </h3>
        <div className="btn-container">
          <button onClick={() => setCount(count + 1)}>
            <span>+</span>
          </button>
          <button onClick={() => setCount(count - 1)}>
            <span>-</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Counting;
