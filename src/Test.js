import React, { createContext, useContext } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
    // Define the state or data you want to share
    const sharedData = 'Hello from context!';

    return (
        <MyContext.Provider value={sharedData}>
            {children}
        </MyContext.Provider>
    );
};

// Create a consumer hook
const useMyContext = () => useContext(MyContext);

// Example usage
const Test = () => {
    // Use the shared data from context
    const sharedData = useMyContext();

    return (
        <div>
            <h1>{sharedData}</h1>
        </div>
    );
};

export default Test;
