import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PlaylistHeaderInPlaylist from '@/Pages/Playlist/PlaylistHeaderInPlaylist'
import PlaylistMain from '@/Pages/Playlist/Main'
import '@/Pages/Playlist/Playlist.scss'

function Playlist() {
  const { playlistId } = useParams()
  
  return (
    <div key={playlistId} className='playlist'>
      <PlaylistHeaderInPlaylist playlistId={playlistId}/>
      <PlaylistMain playlistId={playlistId}/>  
    </div>
  )
}

export default Playlist