import { configureStore } from "@reduxjs/toolkit";
import friendsReducer from "../features/friends/friendsSlice";
import authReducer from "../features/auth/authSlice";
export const store = configureStore({
    reducer: {
        friends: friendsReducer,
        auth: authReducer,
    },
});
