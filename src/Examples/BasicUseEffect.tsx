import React, { useState, useEffect } from 'react';

const BasicUseEffect = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [updatedTime, setUpdatedTime] = useState((new Date()).toLocaleTimeString())

    useEffect(() => {
        document.title = `Counter 1: ${count1}`;
        setUpdatedTime((new Date()).toLocaleTimeString());

        return () => { document.title = 'React Hooks Demo' };
    }, [count1]);

    return (
        <>
            <span style={{ textAlign: "center" }}>Title last updated: {updatedTime}</span>
            <div className="counter-container">
                <button onClick={() => { setCount1(count1 + 1) }}>
                    Click me
                </button>
                Counter 1: {count1}
            </div>
            <div className="counter-container">
                <button onClick={() => { setCount2(count1 + 1) }}>
                    Click me
                </button>
                Counter 2: {count2}
            </div>
        </>
    );
}

const basicUseEffectDesc = (
    <div>
        useEffect fires every time the component is re-rendered, unless a dependecy array is passed. <br /><br />
        In this example, the title keeps track of Counter 1. Since this effect only cares if the value of Counter 1 has been updated,
        we pass 'count1' in an array to useEffect. <br /><br />
        As the component continues to render, when we increase Counter 2, we do not run the potentially expensive calculation in the useEffect, unless 'count1' changes between renders.<br /><br />
        The title is also set back to 'React Hooks Demo' when this component is unmounted thanks to a returned function in useEffect.
    </div>
);

export const BasicUseEffectExample = {
    title: "Basic useEffect",
    description: basicUseEffectDesc,
    component: BasicUseEffect,
}
