import { useState } from 'react'
import Authorization from './Components/Authorization'
import ProductForm from './Components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Authorization/>
      <ProductForm/>
    </>
  )
}

export default App
