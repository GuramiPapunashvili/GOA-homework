import { useState } from 'react'
import ProductList from './Components/ProductList'
import CountChange from './Components/CountChange'
import LogAtAnyChange from './Components/LogAtAnyChange'
import AdvancedToDo from './Components/AdvancedToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ProductList/>
      <CountChange/>
      <LogAtAnyChange/> */}
      <AdvancedToDo/>
    </>
  )
}

export default App
