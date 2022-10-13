import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    addShow: false,
    // editShow: false,
    categoryList: [],
    categoryID: "",
    categoryName: "",
    categoryStatus: "",
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
        // editShowWindow: (state) => {
        //     state.editShow = true
        // },
        // editCloseWindow: (state) => {
        //     state.editShow = false
        // },
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

export const { addShowWindow, addCloseWindow, editShowWindow, editCloseWindow, showCategoryList, changeCategoryID, changeCategoryName, changeCategoryStatus } = AddCategorySlice.actions;
export default AddCategorySlice.reducer;