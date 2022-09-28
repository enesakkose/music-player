import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songs: null,
    genre: 'POP',
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
        }
    }
})

export const { setSongs, setGenre } = song.actions
export default song.reducer