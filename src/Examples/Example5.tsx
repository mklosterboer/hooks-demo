import React from 'react';
import { exampleProps } from './models';

export const Example5 = (props: exampleProps) => {
    return (
        <div>
            <h2 className="exampleHeader">Custom Fetch Data</h2>
            {props.description}
            <hr style={{width: "100%"}}/>
            Test
        </div>
    )
}
