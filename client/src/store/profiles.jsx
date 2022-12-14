import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    profiles: null,
    profile: null
}

export const profiles = createSlice({
    name: 'profiles',
    initialState,
    reducers: {
        setProfiles: (state,action) => {
            state.profiles = action.payload
        },
        setProfile: (state,action) => {
            state.profile = action.payload
        }
    }
})

export const { setProfiles, setProfile } = profiles.actions
export default profiles.reducer