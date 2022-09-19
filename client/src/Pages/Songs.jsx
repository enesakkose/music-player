import React from 'react'
import SongCard from '@/components/SongCard'
import { useSelector } from 'react-redux'

import '@/Pages/Songs.scss'

function Songs() {
  const { playing, controls } = useSelector(state => state.player)
  
  const { songs } = useSelector(state => state.song)
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