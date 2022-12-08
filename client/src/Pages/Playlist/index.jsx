import React, { useEffect } from 'react'
import PlaylistHeaderInPlaylist from '@/Pages/Playlist/PlaylistHeaderInPlaylist'
import PlaylistMain from '@/Pages/Playlist/PlaylistMain'
import Loading from '@/components/Loading'
import { useSelector } from 'react-redux'
import { useGetPlaylist } from '@/hooks/useGetPlaylist'
import { useParams } from 'react-router-dom'
import '@/Pages/Playlist/Playlist.scss'

function Playlist() {
  const { playlistId } = useParams()
  const { user } = useSelector(state => state.auth)
  const playlist = useGetPlaylist(playlistId)
  const validUser = user?.uid === playlist?.uid
  const bgColor = playlist?.addedSongs[0]?.track?.images?.joecolor?.slice(18, 24)
  
  if(playlist === null) return <Loading/>

  return (
    <div className='playlist'>
      <PlaylistHeaderInPlaylist 
        playlist={playlist}
        bgColor={bgColor} 
        validUser={validUser}
        user={user}
      />
      <PlaylistMain playlist={playlist} validUser={validUser} playlistId={playlistId} bgColor={bgColor} />
    </div>
  )
}

export default Playlist