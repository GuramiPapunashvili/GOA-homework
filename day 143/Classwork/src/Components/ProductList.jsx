import { React, useEffect, useState} from 'react';

const ProductList = () =>{
    const [products,setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    return (
        <div>
            <ul>
                {
                    products.map(product => (
                        <li key={product.key}>{product.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductList;