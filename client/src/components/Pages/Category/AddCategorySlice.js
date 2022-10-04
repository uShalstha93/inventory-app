import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    show: false,
}

const AddCategorySlice = createSlice({
    name: "AddCategory",
    initialState,
    reducers: {
        showWindow: (state) => {
            state.show = true
        },
        closeWindow: (state) => {
            state.show = false
        },
    }
})

export const { showWindow, closeWindow } = AddCategorySlice.actions;
export default AddCategorySlice.reducer;