import React, { useState } from 'react';
import { example } from './models';

const BasicUseState = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter-container">
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        You clicked {count} times
      </div>
    </>
  );
}

const basicUseStateDesc = (
  <div>
    useState creates a local variable and an updater function to save data outside of the render cycles. <br /><br />
    Each time a component is rendered, the previous state is assigned to the 'count' variable.
  </div>
);

export const BasicUseStateExample: example = {
  title: "Basic useState",
  description: basicUseStateDesc,
  component: BasicUseState,
}