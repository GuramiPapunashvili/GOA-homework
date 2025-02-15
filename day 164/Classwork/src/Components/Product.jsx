import useLocalStorage from "../Hooks/useLocalStorage";

const ProductForm = () => {
  const [products, addProduct] = useLocalStorage("products", []);

  const removeItem = (id) => {
    const updatedData = products.filter(item => item.id !== id);
    window.localStorage.setItem("products", JSON.stringify(updatedData));
    addProduct(updatedData);
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={addProduct}>
        <input type="text" name="name" placeholder="Product Name" required/>
        <input type="number" name="price" placeholder="Price" required/>
        <input type="text" name="category" placeholder="Category"/>
        <button type="submit"> Add Product </button>
      </form>

      <div>
        <h3>Products List:</h3>
        <ul>
          {products.map((product) => (
            <li onClick={() => removeItem(product.id)} key={product.id}>  
              {product.name} - ${product.price} ({product.category})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductForm;