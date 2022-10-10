import React,{ useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useClickOutside } from '@/hooks/useClickOutside'
import PlaylistHeaderInPlaylist from '@/Pages/Playlist/PlaylistHeaderInPlaylist'
import Icon from '@/components/Icon'
import DropdownMenu from '@/components/DropDownMenu'
import '@/Pages/Playlist/Playlist.scss'

function Playlist() {
  const { playlistId } = useParams()

  const { playlists } = useSelector(state => state.playlist)
  const playlistName = playlists.find((playlist) => playlist.id === playlistId)

  return (
    <div className='playlist'>
      <PlaylistHeaderInPlaylist playlistId={playlistId}/>
      <div className="playlist__main">
        <div className="playlist__main__background"/>
      </div>  
    </div>
  )
}

export default Playlist