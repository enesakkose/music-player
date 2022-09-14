import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songs: null
}

export const song = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setSongs: (state,action) => {
            state.songs = action.payload
        }
    }
})

export const { setSongs } = song.actions
export default song.reducer