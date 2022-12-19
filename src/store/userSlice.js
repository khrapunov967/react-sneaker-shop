import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FirestoreService from "../services/FirestoreService";
// import { getAuth } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from "../firebase";

// export const signUpUser = createAsyncThunk(
//     "user/signUpUser",
//     async (name, email, password) => {
//         const auth = getAuth(app);

//         const {user} = await createUserWithEmailAndPassword(auth, email, password).catch((err) => console.log(err));

//         return {
//             name,
//             id: user.uid,
//             email: user.email
//         }
//     }
// )

export const fetchUserData = createAsyncThunk(
    "user/fetchUserData",
    async (userId) => {
        const user = await FirestoreService.getUserById(userId).catch((er) => console.log(er));
        return user;
    } 
)



const userSlice = createSlice({
    name: "user",
    initialState: {
        userId: JSON.parse(localStorage.getItem("userId")),
        name: "",
        cart: JSON.parse(localStorage.getItem("cart")) || []
    },
    reducers: {
        addUser(state, action) {
            state.userId = action.payload.userId;
            localStorage.setItem("userId", JSON.stringify(action.payload.userId));
        },

        removeUser(state) {
            state.userId = null;
            localStorage.setItem("userId", JSON.stringify(null));
        },

        addItemToCart(state, action) {
            const newItem = {
                id: Date.now(),
                title: action.payload.title,
                productId: action.payload.id,
                size: action.payload.size,
                count: action.payload.count,
                price: action.payload.price,
                cover: action.payload.cover
            };

            state.cart.push(newItem);
            localStorage.setItem("cart", JSON.stringify(state.cart));
            FirestoreService.setCart(state.userId, state.cart);
        },

        changeItemCountInCart(state, action) {
            const item = state.cart.find(val => val.id === action.payload.id);

            item.count = action.payload.newCount;
            localStorage.setItem("cart", JSON.stringify(state.cart));
            FirestoreService.setCart(state.userId, state.cart);
        },

        removeItemFromCart(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
            localStorage.setItem("cart", JSON.stringify(state.cart));
            FirestoreService.setCart(state.userId, state.cart);
        },

        clearCart(state) {
            state.cart = [];
            localStorage.setItem("cart", JSON.stringify(state.cart));
            FirestoreService.setCart(state.userId, state.cart);
        }
    },
    
    extraReducers: {
        [fetchUserData.fulfilled]: (state, action) => {
            state.name = action.payload.name;
            state.cart = action.payload.cart;
        }
    }
});

export const { 
    addUser, 
    removeUser, 
    addItemToCart, 
    changeItemCountInCart, 
    removeItemFromCart,
    clearCart 
} = userSlice.actions;

export default userSlice.reducer;