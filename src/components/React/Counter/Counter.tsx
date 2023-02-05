import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);

  return (
    <div>
      {count}
      <button onClick={add}>Aumentar</button>
    </div>
  );
};
