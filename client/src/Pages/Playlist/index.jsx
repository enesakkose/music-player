import React, { useState, useEffect } from 'react'
import HeaderInPlaylist from '@/Pages/Playlist/Header'
import PlaylistMain from '@/Pages/Playlist/PlaylistMain'
import Loading from '@/components/Loading'
import { useValidUser } from '@/hooks/useValidUser'
import { useGetProfile } from '@/hooks/useGetProfile'
import { useGetPlaylist } from '@/hooks/useGetPlaylist'
import { useParams } from 'react-router-dom'
import '@/Pages/Playlist/Playlist.scss'

function Playlist() {
  const { playlistId } = useParams()
  const playlist = useGetPlaylist(playlistId)
  const validUser = useValidUser(playlist?.uid)
  const bgColor = playlist?.addedSongs[0]?.track?.images?.joecolor?.slice(18, 24)
  
  if(playlist === null) return <Loading/>
  
  return (
    <div key={playlist.id} className='playlist'>
      <HeaderInPlaylist 
        playlist={playlist}
        bgColor={bgColor} 
        validUser={validUser}
      />
      <PlaylistMain 
        playlist={playlist} 
        validUser={validUser} 
        bgColor={bgColor}
      />
    </div>
  )
}

export default Playlist