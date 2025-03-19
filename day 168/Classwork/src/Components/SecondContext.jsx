import React, { createContext, useContext } from "react";
import { FirstContext } from "./FirstProvider";
export const SecondContext = createContext();

const SecondProvider = ({ children }) => {
  const firstValue = useContext(FirstContext);
  const secondValue = `Second Context: ${firstValue}`;

  return (
    <SecondContext.Provider value={secondValue}>
      {children}
    </SecondContext.Provider>
  );
};

export default SecondProvider;
