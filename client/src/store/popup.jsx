import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    openPopup: false
}

const popup = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setOpenPopup: (state,action) => {
            state.openPopup = action.payload.open
            state.name = action.payload.name || null
        }
    }
})

export const { setOpenPopup } = popup.actions
export default popup.reducer