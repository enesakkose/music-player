import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrent, setCurrentSongs, playPause } from "@/store/player";
import  { store } from "@/store"

export const usePlaySong = (songs, current, isPlaying) => {
  const haveSongs = songs.some(song => song.key === current.key)

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