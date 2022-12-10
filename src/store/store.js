import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice from "./productsSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer: {
        cart: cartSlice,
        products: productsSlice,
        user: userSlice,
    }
});