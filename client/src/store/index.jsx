import { configureStore } from '@reduxjs/toolkit'
import playlist from '@/store/playlist'
import song from '@/store/song'
import player from '@/store/player'

export const store = configureStore({
  reducer: {
    playlist,
    song,
    player
  },
})