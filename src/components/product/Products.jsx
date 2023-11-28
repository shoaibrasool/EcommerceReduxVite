// import React from 'react'
import { useSelector } from 'react-redux'
import './product.css'


const Products = () => {
    const Products = useSelector(state => state.reducer.product)
    return (
        <>
            <div className='cards'>
                {Products.map((product) => (
                    <div className='card' key={product.id}>
                        <h1>
                            {product.text}
                        </h1>

                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products
