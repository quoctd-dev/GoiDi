import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,   // thông tin người dùng
    token: null,  // token nếu cần
    isAuthenticated: false, // đã đăng nhập hay chưa
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
