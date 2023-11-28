import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [
        { id: 1, text: 'shampoo' },
        { id: 2, text: 'lux' },
        { id: 3, text: 'head and shoulder' },
        { id: 4, text: 'colgate' },
        { id: 5, text: 'empty' },
    ],
    cart: [
    ]
}

export const productSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        }
    }
})


export const { addToCart } = productSlice.actions
export default productSlice