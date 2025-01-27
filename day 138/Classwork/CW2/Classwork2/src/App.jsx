import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, e.target.item.value]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="item" placeholder="add todo" required />
        <input type="submit" />
      </form>

      <ul>
        {list.map((item, index) => {
        return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
