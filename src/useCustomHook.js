import { useState } from "react";

function useCustomHook(initialCount = 0) {

    const [count, setCount] = useState(initialCount)

    function addItem() {
        setCount(count + 1);

    }
    function deleteItem() {
        setCount(count - 1);
    }
    return { count, addItem, deleteItem }
}

export default useCustomHook;