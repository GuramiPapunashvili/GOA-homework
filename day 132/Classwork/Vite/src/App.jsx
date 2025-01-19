import React from 'react';
import './App.css'

function App() {
  let count = 0;
  const increment = () => {
    count++
    console.log(count)
  }
  return (
    <main>
        <button onClick={increment}>increment</button>
        <p>Count: {count}</p>
    </main>
  )
}

export default App
