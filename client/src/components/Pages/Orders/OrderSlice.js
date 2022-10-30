import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    orderList: [],
}

const OrderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        showOrderList: (state, actions) => {
            state.orderList = actions.payload
        },
    }
})

export const { showOrderList } = OrderSlice.actions;
export default OrderSlice.reducer;
