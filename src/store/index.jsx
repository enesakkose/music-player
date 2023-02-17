import { configureStore } from '@reduxjs/toolkit'

//STATE
import playlist from '@/store/playlist'
import song from '@/store/song'
import player from '@/store/player'
import auth from '@/store/auth'
import modal from '@/store/modal'
import popup from '@/store/popup'
import profiles from '@/store/profiles'
import volume from '@/store/volume'
import audio from '@/store/audio'

//SERVICES
import { musicApi } from '@/services/music'

export const store = configureStore({
  reducer: {
    audio,
    playlist,
    song,
    player,
    auth,
    modal,
    popup,
    profiles,
    volume,
    [musicApi.reducerPath]: musicApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(musicApi.middleware)
})