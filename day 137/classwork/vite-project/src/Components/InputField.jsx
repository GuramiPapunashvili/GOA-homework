import React, { useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const HandleAddProducts = (e) => {
    e.preventDefault();

    const product = {
      name: e.target.name.value,
      price: e.target.price.value,
    };

    setProducts([product, ...products]);
    e.target.name.value = '';
    e.target.price.value = '';
  };

  return (
    <div>
      <form onSubmit={HandleAddProducts}>
        <input
          type="text"
          name="name"
          placeholder="Please enter your product name"
        />
        <input
          type="text"
          name="price"
          placeholder="Please enter your product price"
        />
        <button type="submit">Add Product</button>
      </form>

      <ul>
        {products.length > 0 ? (
          products.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))
        ) : (
          <p>No products</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
