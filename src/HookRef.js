import { useRef, useEffect } from "react";
function HookRef() {

    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    const handleClick = () => {
        count.current = count.current + 1;
        alert('You clicked ' + count.current + ' times!');
    }
    return (<>
        <button onClick={handleClick}>Test</button>
    </>);
}

export default HookRef;