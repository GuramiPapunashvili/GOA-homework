import { useState } from 'react'
import './App.css'
import CallBack from './Components/CallBack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CallBack/>
    </>
  )
}

export default App
