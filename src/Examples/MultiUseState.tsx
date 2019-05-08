import React, { useState } from 'react';
import { example } from './models';

const MultiUseState = () => {
    const [orangeCount, setOrangeCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const [bananaCount, setBananaCount] = useState(0);

    return (
        <>
            <div className="counter-container">
                <button onClick={() => setOrangeCount(orangeCount + 1)}>
                    Click me
                </button>
                Number of Oranges: {orangeCount}
            </div>
            <div className="counter-container">
                <button onClick={() => setOrangeCount(orangeCount + 1)}>
                    Click me
                </button>
                Number of Oranges: {orangeCount}
            </div>
            <div className="counter-container">
                <button onClick={() => setAppleCount(appleCount + 1)}>
                    Click me
                </button>
                Number of Apples: {appleCount}
            </div>
            <div className="counter-container">
                <button onClick={() => setBananaCount(bananaCount + 1)}>
                    Click me
                </button>
                Number of Bananas: {bananaCount}
            </div>
        </>
    );
}

const multiUseStateDesc = (
    <div>
        useState can be be used to create multiple local state variables and they all have independent updater functions. <br /><br />
        State variables are still used the same way. For example, the count of oranges is still shared by the whole component.
    </div>
);

export const MultiUseStateExample: example = {
    title: "Multiple useState",
    description: multiUseStateDesc,
    component: MultiUseState,
}

