import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    editProductShow: false,
    currentSelectedProduct: {},
}

const EditProductSlice = createSlice({
    name: "EditProduct",
    initialState,
    reducers: {
        editProductShowWindow: (state, actions) => {
            state.editProductShow = true
            state.currentSelectedProduct = actions.payload
        },
        editProductCloseWindow: (state) => {
            state.editProductShow = false
        },
    }
})

export const { editProductShowWindow, editProductCloseWindow } = EditProductSlice.actions;
export default EditProductSlice.reducer;
