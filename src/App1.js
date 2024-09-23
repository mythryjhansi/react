import React, { useState } from "react";
import FormProviderTest from "./forms/FormProviderTest";
import { FormProvider } from "react-hook-form";

export const AppContext = React.createContext(null); // Export AppContext


export default function App() {

    // const [input, setInPut] = useState('this is from parent');
    // const value = { user: 'John Doe', age: 30 };

    // const handleClicked = (value) => {

    //   setInPut(value);
    // }

    return (
        <AppContext.Provider value={{ value, handleClicked }}>
            From child  {input}
            <FirstContext />
        </AppContext.Provider>
        // <div>
        //   <FormProviderTest />
        // </div>
    );
}
