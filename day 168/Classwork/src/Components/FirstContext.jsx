import React, { createContext } from "react";
export const FirstContext = createContext();

const FirstProvider = ({ children }) => {
  const value = "First Context Value";

  return (
    <FirstContext.Provider value={value}>{children}</FirstContext.Provider>
  );
};

export default FirstProvider;
