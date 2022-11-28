import React from 'react'
import PlaylistHeaderInPlaylist from '@/Pages/Playlist/PlaylistHeaderInPlaylist'
import PlaylistMain from '@/Pages/Playlist/PlaylistMain'
import { useFindPlaylist } from '@/hooks/useFindPlaylist'
import { useParams } from 'react-router-dom'
import '@/Pages/Playlist/Playlist.scss'

function Playlist() {
  const { playlistId } = useParams()
  const findPlaylist = useFindPlaylist(playlistId)
  const bgColor = findPlaylist?.addedSongs[0]?.track?.images?.joecolor?.slice(18, 24)

  return (
    <div key={playlistId} className='playlist'>
      <PlaylistHeaderInPlaylist playlistId={playlistId} bgColor={bgColor}/>
      <PlaylistMain playlistId={playlistId} bgColor={bgColor} />
    </div>
  )
}

export default Playlist