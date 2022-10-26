import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    editCustomerShow: false,
    currentSelectedCustomer: {},
}

const EditCustomerSlice = createSlice({
    name: "EditCustomer",
    initialState,
    reducers: {
        editCustomerShowWindow: (state, actions) => {
            state.editCustomerShow = true
            state.currentSelectedCustomer = actions.payload
        },
        editCustomerCloseWindow: (state) => {
            state.editCustomerShow = false
        }
    }
})

export const { editCustomerShowWindow, editCustomerCloseWindow } = EditCustomerSlice.actions;
export default EditCustomerSlice.reducer;

