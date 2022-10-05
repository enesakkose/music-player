import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songs: null,
    genre: 'POP',
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
        setGenre: (state,action) => {
            state.genre = action.payload
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

export const { setSongs, setGenre, setRecentSongs, setQuerySongs } = song.actions
export default song.reducer