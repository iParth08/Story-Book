import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: null,
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const {signInStart, signInSuccess, signInFailure, logout} = userSlice.actions;
export default userSlice.reducer