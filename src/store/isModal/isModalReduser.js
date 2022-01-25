import { createSlice } from "@reduxjs/toolkit";

const init = {
    isModal: false
}

const isModalWindow = createSlice({
    name: 'isModalWindow',
    initialState: init,
    reducers: {
        toggle(state) {
            state.modal = !state.modal
        }
    }
})
export default isModalWindow
