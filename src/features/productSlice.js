import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : [
        { id: 1, text: 'shampoo' },
        { id: 2, text: 'lux' }, 
        { id: 3, text: 'head and shoulder' },
        { id: 4, text: 'colgate' } ,
        { id: 5, text: 'empty' },
    ]
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    }
})



export default productSlice