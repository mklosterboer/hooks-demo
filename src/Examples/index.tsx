import React from 'react';
import { example } from "./models";

import { BasicUseState } from './BasicUseState';
import { MultiUseState } from './MultiUseState';
import { BasicUseEffect } from './BasicUseEffect';
import { FetchData } from './FetchData';
import { CustomFetchData } from './CustomFetchData';

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
        This works the same as the Fetch Data demo but has extracted useFetch as a custom hook. <br /><br />
        Custom hooks can use hooks and store their own state. In this example, we may not need this to be extracted, 
        but now this logic, including state management, can be used in other componenets. 
    </div>
  )

export const Examples: example[] = [
{title: "Basic useState", component: BasicUseState, description: basicUseStateDesc},
    {title: "Multiple useState", component: MultiUseState, description: multiUseStateDesc},
    {title: "Basic useEffect", component: BasicUseEffect, description: basicUseEffectDesc},
    {title: "Fetch Data", component: FetchData, description: fetchDataDesc},
    {title: "Custom Fetch Data", component: CustomFetchData, description: customFetchDataDesc},
];