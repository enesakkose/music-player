import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songs: null,
    genre: 'POP',
    recentSongs: [],
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
        }
    }
})

export const { setSongs, setGenre, setRecentSongs } = song.actions
export default song.reducer