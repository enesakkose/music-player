import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PlaylistHeaderInPlaylist from '@/Pages/Playlist/PlaylistHeaderInPlaylist'
import PlaylistMain from '@/Pages/Playlist/PlaylistMain'
import '@/Pages/Playlist/Playlist.scss'

function Playlist() {
  const { playlistId } = useParams()

  const { playlists } = useSelector(state => state.playlist)
  const playlistName = playlists.find((playlist) => playlist.id === playlistId)

  return (
    <div className='playlist'>
      <PlaylistHeaderInPlaylist playlistId={playlistId}/>
      <PlaylistMain/>  
    </div>
  )
}

export default Playlist