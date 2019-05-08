import React from 'react';
import { example } from "./models";

import { Example1 } from './Example1';
import { Example2 } from './Example2';
import { Example3 } from './Example3';
import { Example4 } from './Example4';
import { Example5 } from './Example5';

const basicUseStateDesc = (
    <div>
        useState creates a local variable and an updater function to save data outside of the render cycles. <br /><br /> Each time a component is rendered, the previous state is assigned to the 'count' variable.
    </div>
  )

const multiUseStateDesc = (
    <div>
        useState can be be used to create multiple local state variables and they all have independent updater functions. <br /><br />
        State variables are still used the same way. For example, the count of oranges is still shared by the whole component. 
    </div>
  )

const basicUseEffectDesc = (
    <div>
        useEffect fires every time the component is re-rendered, unless a dependecy array is passed. <br /><br />
        In this example, the title keeps track of Counter 1. Since this effect only cares if the value of Counter 1 has been updated,
        we pass 'count1' in an array to useEffect. <br /><br />
        As the component continues to render, when we increase Counter 2, we do not run the potentially expensive calculation in the useEffect, unless 'count1' changes between renders. 
    </div>
  )

const fetchDataDesc = (
    <div>
        Below is data fetched and then formatted. Most of the magic for this happens in the code. <br /><br />
        fetchUrl is a function that when called, sets the state with data and updates the 'loading' status. <br /><br />
        We use useEffect to call fetchUrl with an empty dependecy array so that is only runs once, when mounted. 
    </div>
  )

const customFetchDataDesc = (
    <div>
        Need a Desc
    </div>
  )

export const Examples: example[] = [
{title: "Basic useState", component: Example1, description: basicUseStateDesc},
    {title: "Multiple useState", component: Example2, description: multiUseStateDesc},
    {title: "Basic useEffect", component: Example3, description: basicUseEffectDesc},
    {title: "Fetch Data", component: Example4, description: fetchDataDesc},
    {title: "Custom Fetch Data", component: Example5, description: customFetchDataDesc},
];