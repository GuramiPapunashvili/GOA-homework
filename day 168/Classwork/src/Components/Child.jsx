import React, { useContext } from "react";
import { SecondContext } from "./SecondProvider";

const Child = () => {
  const value = useContext(SecondContext);

  return <h2>{value}</h2>;
};

export default Child;
