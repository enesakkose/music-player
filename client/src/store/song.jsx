import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recentSongs: [],
    querySongs: ''
}

export const song = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setRecentSongs: (state, action) => {
            state.recentSongs = [
                action.payload,
                ...state.recentSongs
            ]
        },
        setQuerySongs: (state, action) => {
            state.querySongs = action.payload
        }
    }
})

export const {  setRecentSongs, setQuerySongs } = song.actions
export default song.reducer