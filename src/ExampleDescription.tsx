import React from 'react';

export const ExampleDescription = (props: any) => {
    return (
        <>
            <h2 className="exampleHeader">{props.title}</h2>
            {props.description}
            <hr style={{ width: "100%" }} />
        </>
    );
}