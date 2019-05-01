import React, { useState, useEffect } from 'react';
import './App.css';

import { Examples } from "./Examples/index";

//const { Example1, Example2, Example3, Example4, Example5 } = Examples;

const App: React.FC = () => {
  const [activeExampleIdx, setActiveExampleIdx] = useState(0);
  let ActiveExample = Examples[activeExampleIdx];

  useEffect(() => {
    ActiveExample = Examples[activeExampleIdx];
  })

  return (
    <div className="App">
      <header className="App-header">
        React Hooks Demo
      </header>
      <div className="examples-list">
        <div className="example-link"><button>Example 1</button></div>
        <div className="example-link"><button>Example 2</button></div>
        <div className="example-link"><button>Example 3</button></div>
        <div className="example-link"><button>Example 4</button></div>
        <div className="example-link"><button>Example 5</button></div>
      </div>
      <div className="example-container">
        <ActiveExample />
      </div>
    </div>
  );
}

export default App;
