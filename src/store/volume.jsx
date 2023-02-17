import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  volume: JSON.parse(localStorage.getItem('currentVolume')) || 0.3,
  muted: false
}

const volume = createSlice({
  name: 'volume',
  initialState,
  reducers: {
    setVolume: (state, action) => {
      state.volume = action.payload
    },
    setMuted: (state, action) => {
      state.muted = action.payload
    }
  }
})

export const { setVolume, setMuted } = volume.actions
export default volume.reducer