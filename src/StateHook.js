import { useState } from "react";

function StateHook() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((count) => count + 1);
        setCount((count) => count + 1);

    }
    const handleDecrement = () => {
        setCount(count - 1);
    }


    return (

        <div>
            <p>Count :{count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>


    );
}

export default StateHook;


