import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    fullName: "",
    token: "",
    captchaKey: ""
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
        changeCaptchaKey: (state,actions) => {
            state.captchaKey = actions.payload
        },
    }
})

export const { changeFullName, changeToken, changeCaptchaKey } = LoginSlice.actions;
export default LoginSlice.reducer;
