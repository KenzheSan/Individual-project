import { createSlice } from "@reduxjs/toolkit"

const init = {
    isLogin: true,
    isUser: false,
    isVendor: false,
}

const isSignUp = createSlice({
    name: 'signUp',
    initialState: init,
    reducers: {
        isUser(state) {
            state.isLogin = false
            state.isVendor = false
            state.isUser = true
        },
        isLogin(state) {
            state.isLogin = true
            state.isVendor = false
            state.isUser = false
        },
        isVendor(state) {
            state.isLogin = false
            state.isVendor = true
            state.isUser = false
        }
    }
})


export default isSignUp