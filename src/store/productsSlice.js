import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = [];
        const productsQuery = collection(db, "products");
        const querySnapshot = await getDocs(productsQuery);

        querySnapshot.forEach((doc) => response.push(doc.data()));

        return response;
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        isFetching: false
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.isFetching = true
        },

        [fetchProducts.fulfilled]: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        }
    }
});

export const { } = productsSlice.actions;
export default productsSlice.reducer;