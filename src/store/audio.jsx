import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  songTime: 0,
  duration: 0,
  seekTime: 0
}

const audio = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setSongTime: (state, action) => {
      state.songTime = action.payload
    },
    setDuration: (state, action) => {
      state.duration = action.payload
    },
    setSeekTime: (state, action) => {
      state.seekTime = action.payload
    }
  }
})

export const { setSongTime, setDuration, setSeekTime } = audio.actions
export default audio.reducer