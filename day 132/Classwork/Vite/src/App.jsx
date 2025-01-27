import React from 'react';
import { useState } from 'react';
import './App.css'

function App() {
  const [count,increment] = useState(0)
  return (
    <main>
        <button onClick={()=>increment(count+1)}>increment</button>
        <p>Count: {count}</p>
    </main>
  )
}

export default App
