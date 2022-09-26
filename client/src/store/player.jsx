import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    current: {},
    currentSongs: [],
    isPlaying: false,
    isActive: false,
}

export const player = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload.song
            state.isActive = true
        },
        setPlaying: (state, action) => {
            state.isPlaying = action.payload
        },
        playPause: (state,action) => {
            state.isPlaying = action.payload
        }
    }
})

export const { setCurrent, setPlaying, playPause } = player.actions
export default player.reducer