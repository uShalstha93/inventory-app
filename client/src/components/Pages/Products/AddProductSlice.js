import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    addProductShow: false,
    categoryName: [],
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
        showCategoryName: (state, actions) => {
            state.categoryName = actions.payload
        },
    }
})

export const { addProductShowWindow, addProductCloseWindow, showCategoryName } = AddProductSlice.actions;
export default AddProductSlice.reducer;
