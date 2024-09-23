import React, { useContext } from "react";
import { AppContext } from "./App";

const FirstContext = () => {
    const { value, handleClicked } = useContext(AppContext) // Use the custom hook to get context

    return (
        <div>
            <p>User: {value.user}</p>
            <p>Age: {value.age}</p>
            <button onClick={() => handleClicked('this is from child')}>Click me</button>
        </div>
    );
};

export default FirstContext;
