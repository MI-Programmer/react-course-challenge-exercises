"use client";

import { useState } from "react";

const Counter = ({ users }) => {
  const [state, setState] = useState(0);

  return (
    <div>
      <p>There is {users.length}</p>
      <button onClick={() => setState((c) => c + 1)}>{state}</button>
    </div>
  );
};

export default Counter;
