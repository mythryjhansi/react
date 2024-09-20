import { useState } from "react";

const useCounter = (initialValue = 0, incrementBy = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + incrementBy);
  };

  const decrement = () => {
    setCount(count - incrementBy);
  };

  return [count, increment, decrement];
};
export default useCounter;
