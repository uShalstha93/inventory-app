import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    addOrderShow: false,
    customer: [],
    product: [],
    currentSelectedProductID: "",
    currentSelectedProductName: "",
    currentSelectedProductPrice: "",
    currentSelectedCustomerID: "",
    currentSelectedCustomerName: "",
    currentSelectedCustomerContact: "",
    totalPrice: ""
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
        showCurrentSelectedProductPrice: (state, actions) => {
            state.currentSelectedProductPrice = actions.payload
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
        changeTotalPrice: (state, actions) => {
            state.totalPrice = actions.payload
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
    showCurrentSelectedProductPrice,
    showCurrentSelectedCustomerID,
    showCurrentSelectedCustomerName,
    showCurrentSelectedCustomerContact,
    changeTotalPrice
} = AddOrderSlice.actions;

export default AddOrderSlice.reducer;
