import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from 'redux-logger';
import AddCategorySlice from "./components/Pages/Category/AddCategorySlice";

const reducer = combineReducers({
    AddCategory: AddCategorySlice,
});

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
