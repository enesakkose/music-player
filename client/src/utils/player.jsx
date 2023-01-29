import { store } from "@/store"
import { playPause, nextSong, prevSong } from '@/store/player'

export const handlePlayPause = (current, isPlaying) => {
  if(!current.key) return
  if(isPlaying) return store.dispatch(playPause(false))
  if(!isPlaying) return store.dispatch(playPause(true))
}

export const handleNextSong = (currentIndex, currentSongs) => {
  if(currentIndex === currentSongs.length - 1){
    return store.dispatch(nextSong(0))
  }else{
    return store.dispatch(nextSong(currentIndex + 1))
  } 
}

export const handlePrevSong = (currentIndex, currentSongs) => {
  if(currentIndex === 0){
    return store.dispatch(prevSong(currentSongs.length - 1)) 
  }else{
    return store.dispatch(prevSong(currentIndex - 1))
  } 
}