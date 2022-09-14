import React, { useState , useEffect } from 'react'
import songData from '@/api/songs.json'
import SongCard from '@/components/SongCard'
import { useSelector, useDispatch } from 'react-redux'
import { setSongs } from '@/store/song'
import '@/Pages/Songs.scss'

function Songs() {
  const dispatch = useDispatch()
  const { songs } = useSelector(state => state.song)
  
  useEffect(() => {
    dispatch(setSongs(songData))
  }, [])

  if(songs === null) return '...loading'
  
  return (
    <div className='songs'>
      {songs.map((song) => (
        <SongCard key={song.id} song={song}/>
      ))}
    </div>
  )
}

export default Songs