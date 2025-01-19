import './App.css'
import ProductList from './ProductList/ProductList';

function App() {
  const products = [
    { name: "Laptop", price: "$999", description: "High-performance laptop" },
    { name: "Smartphone", price: "$699", description: "Latest model smartphone" },
    { name: "Headphones", price: "$199", description: "Noise-cancelling headphones" },
    { name: "Smartwatch", price: "$299", description: "Stylish smartwatch" },
  ];

  return (
    <main>
      <ProductList products={products}/>
    </main>
  )
}

export default App
