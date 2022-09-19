import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    current: null,
    control: false,
    playing: false,
    volume: null,
}

export const player = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload
        },
        setControl: (state, action) => {
            state.control = action.payload
        },
        setPlaying: (state, action) => {
            state.playing = action.payload
        },
        setVolume: (state, action) => {
            state.volume = action.payload
        }
    }
})

export const { setCurrent, setControl, setPlaying, setVolume } = player.actions
export default player.reducer