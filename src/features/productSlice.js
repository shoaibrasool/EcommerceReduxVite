import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [
        { id: 1, text: 'shampoo', inventory: 1 },
        { id: 2, text: 'lux', inventory: 1 },
        { id: 3, text: 'head and shoulder', inventory: 1 },
        { id: 4, text: 'colgate', inventory: 1 },
        { id: 5, text: 'empty', inventory: 1 },
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
        },
        addToInventory: (state, action) => {
            state.cart.map((product) => {
                if (product.id == action.payload.id) {
                    product.inventory += 1;
                }
            })
        }
    }
})


export const { addToCart, addToInventory } = productSlice.actions
export default productSlice