import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>My Counter: {count}</h3>
      <section>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(Math.max(0, count - 1))}>-</button>
      </section>
    </div>
  );
};
