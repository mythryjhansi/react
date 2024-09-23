import { useState, useMemo } from "react";

function FirstState() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)


        // input.current.focus();
    }

    const squareCount = () => {
        console.log('am in squareCount')
        return count * 2;
    }


    const doubleValue = useMemo(() => squareCount(), [count]);

    return (

        <>
            <br />
            {doubleValue}
            <br />
            <button onClick={handleClick}>Add</button>
        </>

    );
}

export default FirstState;