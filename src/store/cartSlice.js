import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FirestoreService from "../services/FirestoreService";

export const fetchCartByUserId = createAsyncThunk(
    "cart/fetchCartByUserId",
    async (userId) => {
        if (userId) {
            const cart = await FirestoreService.getCartByUserId(userId);
            return cart;
        } else {
            return JSON.parse(localStorage.getItem("cart")) || [];
        }
    }
)

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, action) {
            const newItem = {
                id: Date.now(),
                title: action.payload.title,
                productId: action.payload.id,
                size: action.payload.size,
                count: action.payload.count,
                price: action.payload.price,
                cover: action.payload.cover
            };

            state.items.push(newItem);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },

        changeItemCount(state, action) {
            const item = state.items.find(val => val.id === action.payload.id);
            item.count = action.payload.newCount;
            
            localStorage.setItem("cart", JSON.stringify(state.items));
        },

        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },

        clearCart(state) {
            state.items = [];
            localStorage.setItem("cart", JSON.stringify(state.items));
        }
    },
    extraReducers: {
        [fetchCartByUserId.fulfilled]: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const { addItem, changeItemCount, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;