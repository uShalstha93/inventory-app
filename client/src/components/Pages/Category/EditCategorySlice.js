import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    editShow: false,
    currentSelectedItem: {},
}

const EditCategorySlice = createSlice({
    name: "EditCategory",
    initialState,
    reducers: {
        editShowWindow: (state, actions) => {
            state.editShow = true
            state.currentSelectedItem = actions.payload
        },
        editCloseWindow: (state) => {
            state.editShow = false
        },
    }
})

export const { editShowWindow, editCloseWindow } = EditCategorySlice.actions;
export default EditCategorySlice.reducer;