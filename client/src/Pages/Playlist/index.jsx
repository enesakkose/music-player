import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PlaylistHeaderInPlaylist from '@/Pages/Playlist/PlaylistHeaderInPlaylist'
import PlaylistMain from '@/Pages/Playlist/PlaylistMain'
import '@/Pages/Playlist/Playlist.scss'

function Playlist() {
  const { playlistId } = useParams()
  const { playlist } = useSelector(state => state.playlist)
  const bgColor = playlist[0]?.track?.images?.joecolor?.slice(18, 24)

  return (
    <div key={playlistId} className='playlist'>
      <PlaylistHeaderInPlaylist playlistId={playlistId} bgColor={bgColor} />
      <PlaylistMain playlistId={playlistId} bgColor={bgColor} />
    </div>
  )
}

export default Playlist