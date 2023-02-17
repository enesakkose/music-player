import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recentSongs: [],
    querySongs: '',
    openCover: false
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
        },
        setOpenCover: (state, action) => {
            state.openCover = action.payload
        }
    }
})

export const {  setRecentSongs, setQuerySongs, setOpenCover } = song.actions
export default song.reducer