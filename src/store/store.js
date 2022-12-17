import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer: {
        products: productsSlice,
        user: userSlice,
    }
});