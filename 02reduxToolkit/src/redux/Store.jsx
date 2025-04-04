import {configureStore} from "@reduxjs/toolkit"
import cartReducer from './slices/cartSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    devTools: true,
});

export default store;