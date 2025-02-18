import { useState } from "react";
import CalculatorUI from "./CalculatorUI";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculateSum = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  return (
    <CalculatorUI
      num1={num1}
      num2={num2}
      onNum1Change={setNum1}
      onNum2Change={setNum2}
      onCalculate={calculateSum}
      result={result}
    />
  );
};

export default Calculator;
