import React, { useState } from 'react';

const Todo = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const expensiveCalculation = (num) => {
        console.log('Calculating...');
        return num * 2;
    };

    const calculatedValue = expensiveCalculation(count);

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Expensive Calculation Result: {calculatedValue}</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something..."
            />
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
};

export default Todo;
