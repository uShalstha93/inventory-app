import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    addProductShow: false,
}

const AddProductSlice = createSlice({
    name: "AddProduct",
    initialState,
    reducers: {
        addProductShowWindow: (state) => {
            state.addProductShow = true
        },
        addProductCloseWindow: (state) => {
            state.addProductShow = false
        },
    }
})

export const { addProductShowWindow, addProductCloseWindow } = AddProductSlice.actions;
export default AddProductSlice.reducer;
