import React from 'react';
import './ProductList.css'

const ProductList = ({products}) =>{
    return (
        products.map((product,index) => (
            <div className='product'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
            </div>
        ))
    )
}

export default ProductList;