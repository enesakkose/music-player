import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    modal: null,
    data: null,
    open: false
}

const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.open = true
            state.data = action.payload.data || null
            state.name = action.payload.name
        },
        closeModal: (state) => {
            state.open = false
            state.data = null
            state.name = null
        }
    }
})

export const { openModal, closeModal } = modal.actions
export default modal.reducer