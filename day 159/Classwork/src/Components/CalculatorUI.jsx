const CalculatorUI = ({ num1, num2, onNum1Change, onNum2Change, onCalculate, result }) => {
    return (
      <div>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => onNum1Change(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => onNum2Change(e.target.value)}
        />
        <button onClick={onCalculate}>Calculate Sum</button>
        {result !== null && <h3>Result: {result}</h3>}
      </div>
    );
  };
  
  export default CalculatorUI;
  