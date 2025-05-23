import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    const newCount = count + 1;
    setCount(newCount);
  }
  function handleRemove() {
    const newCount = count - 1;
    setCount(newCount);
  }

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default Counter;
