import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    fullName: "",
    token: ""
}

const LoginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {
        changeFullName: (state, actions) => {
            state.fullName = actions.payload
        },
        changeToken: (state, actions) => {
            state.token = actions.payload
        },
    }
})

export const { changeFullName, changeToken } = LoginSlice.actions;
export default LoginSlice.reducer;
