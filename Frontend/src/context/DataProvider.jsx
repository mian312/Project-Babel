import { createContext, useState, useEffect } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [account, setAccount] = useState(() => {
        // Retrieve the account data from localStorage
        const storedAccount = localStorage.getItem("account");
        return storedAccount ? JSON.parse(storedAccount) : { name: '', email: '' };
    });

    // Use useEffect to save the account data to localStorage when it changes
    useEffect(() => {
        localStorage.setItem("account", JSON.stringify(account));
    }, [account]);

    return (
        <DataContext.Provider value={{
            account,
            setAccount
        }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
