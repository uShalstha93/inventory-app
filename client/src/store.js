import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from 'redux-logger';
import LoginSlice from "./components/Form/LoginSlice";
import AddCategorySlice from "./components/Pages/Category/AddCategorySlice";
import CategorySlice from "./components/Pages/Category/CategorySlice";
import EditCategorySlice from "./components/Pages/Category/EditCategorySlice";
import AddCustomerSlice from "./components/Pages/Customers/AddCustomerSlice";
import CustomerSlice from "./components/Pages/Customers/CustomerSlice";
import EditCustomerSlice from "./components/Pages/Customers/EditCustomerSlice";
import AddOrderSlice from "./components/Pages/Orders/AddOrderSlice";
import OrderSlice from "./components/Pages/Orders/OrderSlice";
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
    AddCustomer: AddCustomerSlice,
    EditCustomer: EditCustomerSlice,
    Order: OrderSlice,
    AddOrder: AddOrderSlice,
    Login: LoginSlice,
});

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
