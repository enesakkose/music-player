import React, { useRef } from 'react'
import HeaderInPlaylist from '@/Pages/Playlist/Header'
import PlaylistMain from '@/Pages/Playlist/PlaylistMain'
import Loading from '@/components/Loading'
import { useGetProfile } from '@/hooks/useGetProfile'
import { getMobileTabletSize } from '@/utils/size'
import { useValidUser } from '@/hooks/useValidUser'
import { useHandleScroll } from '@/hooks/useScroll'
import { useGetPlaylist } from '@/hooks/useGetPlaylist'
import { useParams } from 'react-router-dom'
import '@/Pages/Playlist/Playlist.scss'

function Playlist() {
  const { playlistId } = useParams()
  const playlist = useGetPlaylist(playlistId)
  const validUser = useValidUser(playlist?.uid)
  const ref = useRef(null)
  const scrollTop = useHandleScroll(ref)
  const bgColor = playlist?.addedSongs[0]?.track?.images?.joecolor?.slice(18, 24)
  const size = getMobileTabletSize()
  
  if(playlist === null) return <Loading/>
  
  return (
    <div ref={ref} key={playlist.id} className='playlist'>
      <HeaderInPlaylist 
        playlist={playlist}
        bgColor={bgColor} 
        validUser={validUser}
        scrollTop={scrollTop}
      />
      <PlaylistMain 
        playlist={playlist} 
        validUser={validUser} 
        bgColor={bgColor}
        size={size}
      />
    </div>
  )
}

export default Playlist