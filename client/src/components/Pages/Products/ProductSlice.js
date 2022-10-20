import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    productList: [],
    productCategory: [],
}

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        showProductList: (state, actions) => {
            state.productList = actions.payload
        },
        showCategoryName: (state, actions) => {
            state.productCategory = actions.payload
        },
    }
})

export const { showProductList, showCategoryName } = ProductSlice.actions;
export default ProductSlice.reducer;