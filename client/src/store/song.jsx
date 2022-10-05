import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songs: null,
    recentSongs: [],
    querySongs: ''
}

export const song = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setSongs: (state,action) => {
            state.songs = action.payload
        },
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

export const { setSongs, setRecentSongs, setQuerySongs } = song.actions
export default song.reducer