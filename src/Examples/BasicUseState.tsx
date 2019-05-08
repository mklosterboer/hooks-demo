import React, { useState } from 'react';
import { exampleProps } from './models';

export const BasicUseState = (props: exampleProps) => {
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
      {props.description}
    </>
  );
}
