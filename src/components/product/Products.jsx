// import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addToCart, addToInventory } from '../../features/productSlice'

import './product.css'


const Products = () => {
    const Products = useSelector(state => state.reducer.product)
    const cart = useSelector(state => state.reducer.cart)
    const dispatch = useDispatch()

    const toCart = (productId) => {

        const clickedProd = Products.find((product) => product.id === productId);
        const isProductInCart = cart.some((product) => product.id === clickedProd.id);

        if (!isProductInCart) {
            dispatch(addToCart(clickedProd));
        } else {
            dispatch(addToInventory(clickedProd));
        }
    }

    return (
        <>
            <div className='cards'>
                {Products.map((product) => (
                    <div className='card' key={product.id}>
                        <h1>{product.text}</h1>

                        <button onClick={() => {
                            toCart(product.id)
                        }}>Add to Cart</button>
                        
                        <h3>Unit Price{product.price}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products
