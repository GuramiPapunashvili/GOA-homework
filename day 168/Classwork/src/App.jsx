import React from "react";
import FirstProvider from "./FirstProvider";
import SecondProvider from "./SecondProvider";
import Child from "./Child";

function App(){
  return (
    <FirstProvider>
      <SecondProvider>
        <Child />
      </SecondProvider>
    </FirstProvider>
  );
};

export default App;
