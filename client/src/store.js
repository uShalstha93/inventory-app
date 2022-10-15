import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from 'redux-logger';
import AddCategorySlice from "./components/Pages/Category/AddCategorySlice";
import CategorySlice from "./components/Pages/Category/CategorySlice";
import EditCategorySlice from "./components/Pages/Category/EditCategorySlice";

const reducer = combineReducers({
    AddCategory: AddCategorySlice,
    Category: CategorySlice,
    EditCategory: EditCategorySlice,
});

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
