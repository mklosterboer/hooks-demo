import React, { useState } from 'react';
import './App.css';

import { Examples } from "./Examples/index";
import { ExampleDescription } from "./ExampleDescription";

const App: React.FC = () => {
  const [activeExampleIdx, setActiveExampleIdx] = useState(0);
  let ActvExample = Examples[activeExampleIdx]

  return (
    <div className="App">
      <h1 className="App-header">
        React Hooks Demo
      </h1>
      <div className="examples-list">
        {Examples.map((ex, idx) => (
          <div key={`ex-${idx}-${ex.title}`} className="example-link">
            <button className="exampleButtons" onClick={() => setActiveExampleIdx(idx)}>
              {ex.title}
            </button>
            {idx === activeExampleIdx && <div className="activeIndicator">&nbsp;</div>}
          </div>
        ))}
      </div>
      <div className="example-container">
        <ExampleDescription description={ActvExample.description} title={ActvExample.title}/>
        <ActvExample.component />
      </div>
    </div>
  );
}

export default App;
