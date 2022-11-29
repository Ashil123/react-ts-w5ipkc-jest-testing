import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [val, setVal] = useState(0);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>{val}</p>
      <button
        onClick={() => {
          setVal((prev) => prev + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}
