import React, { useState, useMemo } from 'react';

const HookMemo = () => {
    const [number, setNumber] = useState();

    const square = useMemo(() => {
        console.log('Calculating square...' + number);
        return number * number;
    }, [number]);

    return (
        <div>
            <h1>Square Calculator</h1>
            <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <p>Square of {number} is {square}</p>
        </div>
    );
};

export default HookMemo;
