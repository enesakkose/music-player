import { setCurrent, setCurrentSongs, playPause } from "@/store/player"
import { modal } from '@/utils/helpers'
import { store } from "@/store"

export const usePlaySong = (songs, inSongs, current, isPlaying, user) => {

  if (!user) return modal('UnauthSongModal', songs[0])

  if (current.key !== songs[0].key && inSongs)
    return store.dispatch(playPause(!isPlaying))

  store.dispatch(setCurrent(songs[0]))
  store.dispatch(setCurrentSongs(songs))

  if (current.key === songs[0].key) return store.dispatch(playPause(!isPlaying))
  if (current.key !== songs[0].key) return store.dispatch(playPause(true))
}