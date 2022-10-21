import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    productList: [],
}

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        showProductList: (state, actions) => {
            state.productList = actions.payload
        },
    }
})

export const { showProductList, showCategoryName } = ProductSlice.actions;
export default ProductSlice.reducer;