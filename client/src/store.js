import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from 'redux-logger';
import AddCategorySlice from "./components/Pages/Category/AddCategorySlice";
import CategorySlice from "./components/Pages/Category/CategorySlice";
import EditCategorySlice from "./components/Pages/Category/EditCategorySlice";
import CustomerSlice from "./components/Pages/Customers/CustomerSlice";
import AddProductSlice from "./components/Pages/Products/AddProductSlice";
import EditProductSlice from "./components/Pages/Products/EditProductSlice";
import ProductSlice from "./components/Pages/Products/ProductSlice";

const reducer = combineReducers({
    AddCategory: AddCategorySlice,
    Category: CategorySlice,
    EditCategory: EditCategorySlice,
    AddProduct: AddProductSlice,
    Products: ProductSlice,
    EditProduct: EditProductSlice,
    Customers: CustomerSlice,
});

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
