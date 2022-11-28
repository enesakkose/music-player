import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    profiles: null
}

export const profiles = createSlice({
    name: 'profiles',
    initialState,
    reducers: {
        setProfiles: (state,action) => {
            state.profiles = action.payload
        }
    }
})

export const { setProfiles } = profiles.actions
export default profiles.reducer