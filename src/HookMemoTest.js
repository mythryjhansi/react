import React, { useState, useEffect } from 'react';

export default function HookTest() {

    const [count, setCount] = useState(0);
    const [val, setVal] = useState('');

    //runs only on initial render
    useEffect(() => {
        console.log('initial render')
    }, []);

    useEffect(() => {
        console.log('rendered again')
    });

    //with dependencies
    useEffect(() => {
        console.log('rendered again with count');
    }, [count]);


    const updateVal = (e) => {
        setVal(e.target.value)
    }


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Count update
            </button>

            Input <input type="text" value={val} onChange={updateVal} />
        </div>
    );
}