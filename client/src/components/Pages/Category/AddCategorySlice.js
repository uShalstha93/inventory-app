import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    addShow: false,
    // categoryID: "",
    // categoryName: "",
    // categoryStatus: "",
}

const AddCategorySlice = createSlice({
    name: "AddCategory",
    initialState,
    reducers: {
        addShowWindow: (state) => {
            state.addShow = true
        },
        addCloseWindow: (state) => {
            state.addShow = false
        },
        // changeCategoryID: (state, actions) => {
        //     state.categoryID = actions.payload
        // },
        // changeCategoryName: (state, actions) => {
        //     state.categoryName = actions.payload
        // },
        // changeCategoryStatus: (state, actions) => {
        //     state.categoryStatus = actions.payload
        // },
    }
})

export const { addShowWindow, addCloseWindow } = AddCategorySlice.actions;
export default AddCategorySlice.reducer;