import { createSlice } from "@reduxjs/toolkit";

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
        }
    }
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;