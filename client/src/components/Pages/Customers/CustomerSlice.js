import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    customerList: [],
}

const CustomerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        showCustomerList: (state, actions) => {
            state.customerList = actions.payload
        },
    }
})

export const { showCustomerList } = CustomerSlice.actions;
export default CustomerSlice.reducer;
