import React, { useState, useEffect } from 'react';
import { exampleProps } from './models';

export const BasicUseEffect = (props: exampleProps) => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [updatedTime, setUpdatedTime] = useState((new Date()).toLocaleTimeString())
    
    useEffect(() => {
      document.title = `Counter 1: ${count1}`;
      setUpdatedTime((new Date()).toLocaleTimeString());
    }, [count1]);
   
    const handleClick = () => {
      setCount1(count1 + 1);
    }

    const handleClick2 = () => {
        setCount2(count2 + 1);
      }
   
    return (
    <>
        <h2 className="exampleHeader">Basic useEffect</h2>
        {props.description}
        <hr style={{width: "100%"}}/>

        <span style={{textAlign: "center"}}>Title last updated: {updatedTime}</span>
        <div className="counter-container">
            <button onClick={handleClick}>
                Click me
            </button>
            Counter 1: {count1}
        </div>
        <div className="counter-container">
            <button onClick={handleClick2}>
                Click me
            </button>
            Counter 2: {count2}
        </div>
    </>
    );
}
