"use client";

import { createContext, useContext } from "react";

export const DataContext = createContext();

const FriendsContext = ({ children }) => {

    

    const data = {
        text: "Nahid"
    };

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default FriendsContext;