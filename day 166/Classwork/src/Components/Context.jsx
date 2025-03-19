import { createContext, useContext, useState } from "react";
const WrapperContext = createContext();

export function WrapperProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <WrapperContext.Provider value={{ count, setCount }}>
      {children}
    </WrapperContext.Provider>
  );
}


export function useWrapper() {
  return useContext(WrapperContext);
}
