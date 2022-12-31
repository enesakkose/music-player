import { setCurrent, setCurrentSongs, playPause } from "@/store/player"
import { modal } from '@/utils'
import { store } from "@/store"

export const usePlaySong = (songs, current, isPlaying, user) => {
  const haveSongs = songs.some(song => song.key === current.key)

  if(!user) return modal('UnauthSongModal', songs[0])

  if(current.key !== songs[0].key && haveSongs) 
  return store.dispatch(playPause(!isPlaying))

  store.dispatch(setCurrent(songs[0]))
  store.dispatch(setCurrentSongs(songs))
  
  if(current.key === songs[0].key) return store.dispatch(playPause(!isPlaying))
  if(current.key !== songs[0].key) return store.dispatch(playPause(true))
}

/*if(current.key !== playlist.addedSongs[0].id && haveSongs) 
return dispatch(playPause(!isPlaying))

dispatch(setCurrent(playlist.addedSongs[0].track//warning))
dispatch(setCurrentSongs(playlist.addedSongs))

if(current.key === playlist.addedSongs[0].id) return dispatch(playPause(!isPlaying))
if(current.key !== playlist.addedSongs[0].id) return dispatch(playPause(true))
recente bak bu fonk düzenle
*/