import { configureStore } from '@reduxjs/toolkit'
import playlist from '@/store/playlist'

export const store = configureStore({
  reducer: {
    playlist
  },
})