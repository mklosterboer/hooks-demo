import React, { useState } from 'react';

export const Example2: React.FC = () => {
// Declare a new state variable, which we'll call "count"
const [orangeCount, setOrangeCount] = useState(0);
const [appleCount, setAppleCount] = useState(0);
const [bananaCount, setBananaCount] = useState(0);

return (
    <>
        <div className="fruit-counter-container">
            <button onClick={() => setOrangeCount(orangeCount + 1)}>
                Click me
            </button>
            Number of Oranges: {orangeCount}
        </div>
        <div className="fruit-counter-container">
            <button onClick={() => setAppleCount(appleCount + 1)}>
                Click me
            </button>
            Number of Apples: {appleCount}
        </div>
        <div className="fruit-counter-container">
            <button onClick={() => setBananaCount(bananaCount + 1)}>
                Click me
            </button>
            Number of Bananas: {bananaCount}
        </div>
        <div className="fruit-counter-container">
            <button onClick={() => setOrangeCount(orangeCount + 1)}>
                Click me
            </button>
            Number of Oranges: {orangeCount}
        </div>
        <hr style={{width: "100%"}}/>
        <div>
            useState can be be used to create multiple local state variables and they all have independent updater functions. 
            State variables are still used the same way. For example, the count of oranges is still shared by the whole component. 
        </div>
    </>
);
}
