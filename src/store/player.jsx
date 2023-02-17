import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    current: JSON.parse(localStorage.getItem('currentSong')) || {},
    currentIndex: 0,
    currentSongs: [],
    isPlaying: false,
    isActive: false,
}

export const player = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload.song || action.payload
            state.currentIndex = action.payload.index || 0
            state.isActive = true
        },
        nextSong: (state, action) => {
            state.current = state.currentSongs[action.payload].track || state.currentSongs[action.payload]
            state.currentIndex = action.payload;
            state.isActive = true;
        },
        prevSong: (state, action) => {
            state.current = state.currentSongs[action.payload].track || state.currentSongs[action.payload]
            state.currentIndex = action.payload;
            state.isActive = true;
        },
        setCurrentSongs: (state,action) => {
            state.currentSongs = action.payload
        },
        playPause: (state,action) => {
            state.isPlaying = action.payload
        }
    }
})

export const { 
    setCurrent,  
    playPause, 
    nextSong, 
    setCurrentSongs, 
    prevSong 
} = player.actions

export default player.reducer