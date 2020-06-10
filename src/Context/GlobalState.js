import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Chigerate", amount: -10 },
    { id: 2, text: "Chigerate", amount: 10 },
    { id: 3, text: "Chigerate", amount: -10 },
    { id: 4, text: "Chigerate", amount: 10 },
    { id: 5, text: "Chigerate", amount: -10 },
    { id: 6, text: "Chigerate", amount: 10 },
    { id: 7, text: "Chigerate", amount: -10 },
    { id: 8, text: "Chigerate", amount: 10 },
  ],
};

// Context is created and it is just like the Redux state
export const GlobalContext = createContext(initialState);

// These state can be provided to the componenets by provider. It takes the component as a children and make a HOC
// We have to be able to use the state and disptch from the component so we have to provide the state and dispatch too.
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
