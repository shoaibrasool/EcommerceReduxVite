// import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cart = useSelector(state => state.reducer.cart)
    console.log(cart)


    return (
        <div style={{ textAlign: 'center' }}>
            {
                cart.map((productArray) => {
                    return productArray.map((obj) => (
                        <div className='card' key={obj.id}>
                            <h1>{obj.text}</h1>
                        </div>
                    ));
                })

            }

        </div >
    )
}

export default Cart
