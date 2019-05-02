import React, { useState } from 'react';
import './App.css';

import { Examples } from "./Examples/index";

const App: React.FC = () => {
  const [activeExampleIdx, setActiveExampleIdx] = useState(1);
  let ActiveExample = Examples[activeExampleIdx];

  return (
    <div className="App">
      <header className="App-header">
        React Hooks Demo
      </header>
      <div className="examples-list">
        {Examples.map((ex, idx) => (
          <div className="example-link">
            <button onClick={() => setActiveExampleIdx(idx)}>
              Example {idx + 1}
            </button>
          </div>
        ))}
      </div>
      <div className="example-container">
        <ActiveExample />
      </div>
    </div>
  );
}

export default App;
