import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : [
        { id: 1, text: 'hello world' },
        { id: 2, text: 'No hello ' } 
    ]
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    }
})



export default productSlice