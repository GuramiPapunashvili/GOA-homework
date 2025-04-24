import { useState } from 'react'
import AdminPanel from './AdminPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AdminPanel/>
  )
}

export default App
