import { useState } from "react";
import useCounter from "../../hooks/useCounter";

const CounterComponentOne = () => {
  const [count, increment, decrement] = useCounter(0, 2);

  return (
    <div style={{ margin: "0 auto" }}>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>{count}</p>
    </div>
  );
};

export default CounterComponentOne;
