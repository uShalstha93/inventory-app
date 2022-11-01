import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    addOrderShow: false,
    customer: [],
    product: [],
}

const AddOrderSlice = createSlice({
    name: "AddOrder",
    initialState,
    reducers: {
        addOrderShowWindow: (state) => {
            state.addOrderShow = true
        },
        addOrderCloseWindow: (state) => {
            state.addOrderShow = false
        },
        showCustomerName: (state, actions) => {
            state.customer = actions.payload
        },
        showProductName: (state, actions) => {
            state.product = actions.payload
        },
    }
})

export const { addOrderShowWindow, addOrderCloseWindow, showCustomerName, showProductName } = AddOrderSlice.actions;
export default AddOrderSlice.reducer;
