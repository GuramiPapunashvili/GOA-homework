import React, { useContext } from "react";
import { CountContext } from "./Wrapper";

const Child = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Child;
