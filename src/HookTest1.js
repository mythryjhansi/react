import { useState, useMemo } from "react";
function Abc() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');
    const handleCal = () => {

        console.log('calculating');

        return count * 2
    }

    const result = useMemo(() => { handleCal() }, [count]);

    return (
        <>

            count {count}<br />

            result{result}
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something..."
            />
            <button onClick={() => setCount(count + 1)}>Add</button>
        </>
    );
}

export default Abc;