import React, { useState } from 'react';

export const Example1: React.FC = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="exampleHeader">Basic useState</h2>
      <div className="counter-container">
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        You clicked {count} times
      </div>
      <hr style={{width: "100%"}}/>
        <div>
            useState creates a local variable and an updater function to save data outside of the render cycles. <br /><br />
            Each time a component is rendered, the previous state is assigned to the 'count' variable.
        </div>
    </>
  );
}
