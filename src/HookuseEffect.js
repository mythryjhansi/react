import { useEffect, useState } from "react";

function HookuseEffect() {

    const [count, setCount] = useState(0);


    useEffect(() => {
        document.title = "test" + count;


        // document.getElementById('count').innerHTML = "1";

        const handleScroll = () => {
            alert('scrolled')
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    })

    const handleClick = () => {
        setCount(count + 1);

    }
    return (<>
        <p id="count"></p>
        <button onClick={handleClick}>Add</button></>);
}

export default HookuseEffect;

