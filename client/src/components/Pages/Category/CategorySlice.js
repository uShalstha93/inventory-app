import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    categoryList: [],
}

const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        showCategoryList: (state, actions) => {
            state.categoryList = actions.payload
        },
    }
})

export const { showCategoryList } = CategorySlice.actions;
export default CategorySlice.reducer;