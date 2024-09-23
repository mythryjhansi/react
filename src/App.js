import React, { useState } from "react";
import Child from "./Child";
import FormTest1 from "./forms/FormTest1";


export const AppContext = React.createContext();

export default function App() {
  const value = "to be displayed in child";

  const [input, setInput] = useState("Parent");

  const handleClick = (data) => {
    setInput(data);
  }

  return (
    // <AppContext.Provider value={{ value, handleClick }}>

    //   Input {input}<br />
    //   <Child />
    // </AppContext.Provider>

    <FormTest1 />
  );
}
