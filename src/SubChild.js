import { useContext } from "react";
import { AppContext } from "./App";

function SubChild() {
    const prop = useContext(AppContext);
    console.log(prop);
    return (<>
        <p>Sub Child</p>
        <button onClick={() => prop.handleClick("data from sub child")}>Click</button>
    </>);
}

export default SubChild;