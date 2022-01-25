import { configureStore } from "@reduxjs/toolkit";
import isModalWindow from "../isModal/isModalReduser";
import isSignUp from "../formControlRedusers/signUpControl";
const store = configureStore({
    reducer: {
        isModal: isModalWindow.reducer,
        isSignUp: isSignUp.reducer,
    }
})

export const signUpActions = isSignUp.actions
export const toggleActions = isModalWindow.actions
export default store