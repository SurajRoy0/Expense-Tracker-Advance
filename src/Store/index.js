import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Auth';
import itemReducer from './Items';

const store = configureStore({
    reducer: { auth: authReducer, items: itemReducer }
});

export default store;