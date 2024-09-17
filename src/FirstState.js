import { useState } from "react";

function FirstState() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    return (

        <>
            <p>Count :{count}</p>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={handleClick}>Add</button>
        </>

    );
}

export default FirstState;