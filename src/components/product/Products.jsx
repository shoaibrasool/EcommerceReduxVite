// import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/productSlice'

import './product.css'


const Products = () => {
    const Products = useSelector(state => state.reducer.product)
    const dispatch = useDispatch()

    const toCart = (productId) => {
        const abc = Products.filter((product)=>{
            if(product.id == productId ){
                console.log("filter called")
                return product
            }
        })
        dispatch(addToCart(abc))

    }

    return (
        <>
            <div className='cards'>
                {Products.map((product) => (
                    <div className='card' key={product.id}>
                        <h1>
                            {product.text}
                        </h1>

                        <button onClick={() => {
                            toCart(product.id)
                        }}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products
