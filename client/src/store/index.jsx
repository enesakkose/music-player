import { configureStore } from '@reduxjs/toolkit'
import playlist from '@/store/playlist'
import song from '@/store/song'
import player from '@/store/player'
import favorite from '@/store/favorite'
import auth from '@/store/auth'
import modal from '@/store/modal'

export const store = configureStore({
  reducer: {
    playlist,
    song,
    player,
    favorite,
    auth,
    modal
  },
})