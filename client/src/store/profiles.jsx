import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    profile: null
}

export const profiles = createSlice({
    name: 'profiles',
    initialState,
    reducers: {
        setProfile: (state,action) => {
            state.profile = action.payload
        }
    }
})

export const { setProfile } = profiles.actions
export default profiles.reducer