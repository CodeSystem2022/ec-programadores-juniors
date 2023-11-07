import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addProduct(state, action) {
            state.push(action.payload)
        },
        removeProduct(state, action) {
            return state.filter(prod => prod.id != action.payload);
        },
    }
})

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;

