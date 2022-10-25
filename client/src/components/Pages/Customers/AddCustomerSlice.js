import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    addCustomerShow: false,
}

const AddCustomerSlice = createSlice({
    name: "AddCustomer",
    initialState,
    reducers: {
        addCustomerShowWindow: (state) => {
            state.addCustomerShow = true
        },
        addCustomerCloseWindow: (state) => {
            state.addCustomerShow = false
        },
    }
})

export const { addCustomerShowWindow, addCustomerCloseWindow } = AddCustomerSlice.actions;
export default AddCustomerSlice.reducer;

