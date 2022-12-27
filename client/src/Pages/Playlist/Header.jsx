import React from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'
import Icon from '@/components/Icon'
import { DropdownMenu, DropdownMenuItem } from '@/components/DropdownMenu'
import { useGetProfile } from '@/hooks/useGetProfile'
import { Link } from 'react-router-dom'
import { modal } from '@/utils'
import '@/Pages/Playlist/Header.scss'

function Header({ playlist, bgColor, validUser }) {
  const user = useGetProfile(playlist.uid)
  const coverImage = playlist.addedSongs[0].track?.images?.coverart

  const openPlaylistInfoModal = () => {
    modal('PlaylistInfoModal', playlist)
  }

  const openPlaylistDeleteModal = () => {
    modal('PlaylistDeleteModal', playlist)
  }

  return (        
    <PlaylistHeader 
      className="headerInPlaylist" 
      style={{ backgroundColor: `#${bgColor}`}}
      onClick={openPlaylistInfoModal}
      infoTitle='PLAYLIST'
      img={playlist?.coverURL !== null ? playlist.coverURL : playlist.addedSongs.length > 0 ? coverImage : null}
      infoHeader={playlist.name}
      validProfile={validUser}
    >
      <div className="subActions">
        <h6 className='subActionsLink'>
          <Link to={`/profile/${user?.uid}`}>
            {user?.displayName}
          </Link>
        </h6>

        {validUser && <DropdownMenu 
          className='playlistActionMenu'
          btnClassName='playlistDropdownBtn'
          btn={<Icon name='ThreeDots' size={32}/>}
        >
          <DropdownMenuItem text='Edit Details' onClick={openPlaylistInfoModal}/>
          <DropdownMenuItem text='Delete' onClick={openPlaylistDeleteModal}/>
        </DropdownMenu>}
      </div>
    </PlaylistHeader>
  )
}

export default Header