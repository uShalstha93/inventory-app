import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    show: false,
    categoryList: [],
    categoryID: "",
    categoryName: "",
    categoryStatus: "",
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
        showCategoryList: (state, actions) => {
            state.categoryList = actions.payload
        },
        changeCategoryID: (state, actions) => {
            state.categoryID = actions.payload
        },
        changeCategoryName: (state, actions) => {
            state.categoryName = actions.payload
        },
        changeCategoryStatus: (state, actions) => {
            state.categoryStatus = actions.payload
        },
    }
})

export const { showWindow, closeWindow, showCategoryList, changeCategoryID, changeCategoryName, changeCategoryStatus } = AddCategorySlice.actions;
export default AddCategorySlice.reducer;