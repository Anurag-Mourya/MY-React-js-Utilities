import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reduxSlices/cartSlice';
import productReducer from './reduxSlices/fetchAPIproducts';

const store = configureStore({
    reducer:{
        cart: cartReducer,
        product: productReducer,
    }
});

export default store;