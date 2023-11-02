// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    first_name: "",
    last_name: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.token = action.payload.token;
        },

        unsetUser: (state) => {
            state.email = "";
            state.first_name = "";
            state.last_name = "";
            state.token = "";
        }
    }
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
