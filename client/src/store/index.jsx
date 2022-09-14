import { configureStore } from '@reduxjs/toolkit'
import playlist from '@/store/playlist'
import song from '@/store/song'

export const store = configureStore({
  reducer: {
    playlist,
    song
  },
})