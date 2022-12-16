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
        const { name } = await FirestoreService.getUserById(userId).catch((er) => console.log(er));
        return name;
    } 
)



const userSlice = createSlice({
    name: "user",
    initialState: {
        userId: JSON.parse(localStorage.getItem("userId")),
        name: "",
    },
    reducers: {
        addUser(state, action) {
            state.userId = action.payload.userId;
            localStorage.setItem("userId", JSON.stringify(action.payload.userId));
        },

        removeUser(state) {
            state.userId = null;
            localStorage.setItem("userId", JSON.stringify(null));
        }
    },
    extraReducers: {
        [fetchUserData.fulfilled]: (state, action) => {
            state.name = action.payload;
        }
    }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;