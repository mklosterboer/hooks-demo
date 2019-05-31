import React from 'react';

const BasicUseReducer = () => {
    return <div>placeholder</div>;
}

const basicUseReducerDesc = (
    <div>
        useReducer can be used to be more declarative with state changes. <br /><br />
        Instead of modifying state varibles directly in the component, you 'dispatch' actions to a 
        reducer which contains state. The reducer then makes the changes and returns the new state back to the component;<br /><br />
        In this example, the drop down selector will switch an input between two values that can be saved. If you try to switch to the other value without saving,
        you will get a modal that warns you you will lose the data and offers to continue or cancel. <br /><br />
        The modal uncontrolled and just uses functions in the parent component.
    </div>
);

export const BasicUseReducerExample = {
    title: "Basic useReducer",
    description: basicUseReducerDesc,
    component: BasicUseReducer,
}