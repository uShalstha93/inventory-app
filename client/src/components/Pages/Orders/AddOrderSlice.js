import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    addOrderShow: false,
    customer: [],
    product: [],
    currentSelectedProductID: "",
    currentSelectedProductName: "",
    currentSelectedCustomerID: "",
    currentSelectedCustomerName: "",
    currentSelectedCustomerContact: ""
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
        showCurrentSelectedProductID: (state, actions) => {
            state.currentSelectedProductID = actions.payload
        },
        showCurrentSelectedProductName: (state, actions) => {
            state.currentSelectedProductName = actions.payload
        },
        showCurrentSelectedCustomerID: (state, actions) => {
            state.currentSelectedCustomerID = actions.payload
        },
        showCurrentSelectedCustomerName: (state, actions) => {
            state.currentSelectedCustomerName = actions.payload
        },
        showCurrentSelectedCustomerContact: (state, actions) => {
            state.currentSelectedCustomerContact = actions.payload
        },
    }
})

export const {
    addOrderShowWindow,
    addOrderCloseWindow,
    showCustomerName,
    showProductName,
    showCurrentSelectedProductID,
    showCurrentSelectedProductName,
    showCurrentSelectedCustomerID,
    showCurrentSelectedCustomerName,
    showCurrentSelectedCustomerContact
} = AddOrderSlice.actions;

export default AddOrderSlice.reducer;
