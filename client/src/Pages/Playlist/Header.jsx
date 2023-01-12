import React from 'react'
import CustomPlaylistHeader from '@/components/Playlist/Header'
import Icon from '@/components/Icon'
import { DropdownMenu, DropdownMenuItem } from '@/components/DropdownMenu'
import { useGetProfile } from '@/hooks/useGetProfile'
import { publishPlaylist } from '@/firebase/db'
import { Link } from 'react-router-dom'
import { modal } from '@/utils'
import '@/Pages/Playlist/Header.scss'

function Header({ playlist, bgColor, validUser, scrollTop }) {
  const user = useGetProfile(playlist.uid)
  const coverImage = playlist?.addedSongs[0]?.track?.images?.coverart

  const openPlaylistInfoModal = () => {
    modal('PlaylistInfoModal', playlist)
  }

  const openPlaylistDeleteModal = () => {
    modal('PlaylistDeleteModal', playlist)
  }

  const publishPlaylistHandle = () => {
    publishPlaylist(playlist.id, !playlist.publish)
  }

  return (        
    <CustomPlaylistHeader 
      className="headerInPlaylist" 
      style={{ backgroundColor: `#${bgColor}`}}
      onClick={openPlaylistInfoModal}
      type='PLAYLIST'
      img={playlist?.coverURL !== null ? playlist.coverURL : playlist.addedSongs.length > 0 ? coverImage : null}
      title={playlist.name}
      validProfile={validUser}
      bg={bgColor}
      scrollTop={scrollTop}
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
          <DropdownMenuItem text={playlist.publish ? 'Remove from profile' : 'Add to profile'} onClick={publishPlaylistHandle}/>
          <DropdownMenuItem text='Delete' onClick={openPlaylistDeleteModal}/>
        </DropdownMenu>}
      </div>
    </CustomPlaylistHeader>
  )
}

export default Header