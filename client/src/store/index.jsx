import { configureStore } from '@reduxjs/toolkit'

//STATE
import playlist from '@/store/playlist'
import song from '@/store/song'
import player from '@/store/player'
import auth from '@/store/auth'
import modal from '@/store/modal'
import popup from '@/store/popup'
import profiles from '@/store/profiles'

//SERVICES
import { musicApi } from '@/services/music'

export const store = configureStore({
  reducer: {
    playlist,
    song,
    player,
    auth,
    modal,
    popup,
    profiles,
    [musicApi.reducerPath]: musicApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(musicApi.middleware)
})