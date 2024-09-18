import { useState } from "react";

function StateFn() {

    //useState from react

    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }

    const decrement = () => {

        setCount(count - 1);
    }

    return (<>
        Count <p>{count}</p>
        <button onClick={add}>Add</button>
        <button onClick={decrement}>Delete</button>
    </>);
}

export default StateFn;