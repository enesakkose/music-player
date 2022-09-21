import { configureStore } from '@reduxjs/toolkit'
import playlist from '@/store/playlist'
import song from '@/store/song'
import player from '@/store/player'
import favorite from '@/store/favorite'

export const store = configureStore({
  reducer: {
    playlist,
    song,
    player,
    favorite
  },
})