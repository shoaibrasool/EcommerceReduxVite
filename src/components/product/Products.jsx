// import React from 'react'
import { useSelector } from 'react-redux'

const Products = () => {
    const Products = useSelector(state => state.reducer.product)
    return (
        <>
            <ul>
                {Products.map((product) => (
                    <li key={product.id}>
                        <div>{product.text}</div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Products
