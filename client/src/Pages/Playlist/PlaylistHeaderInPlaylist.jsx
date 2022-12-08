import React, { useState } from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'
import Icon from '@/components/Icon'
import DropdownMenu from '@/components/DropdownMenu'
import { Link } from 'react-router-dom'
import { useClickOutside } from '@/hooks/useClickOutside'
import { modal } from '@/utils'
import '@/Pages/Playlist/PlaylistHeaderInPlaylist.scss'

function PlaylistHeaderInPlaylist({ playlist, bgColor, validUser, user }) {
  const [ open, setOpen ] = useState(false)
  const coverImage = playlist?.addedSongs[0]?.track?.images?.coverart

  const domNode = useClickOutside(() => { 
    setOpen(false)
  })

  const openPlaylistInfoModal = () => {
    modal('PlaylistInfoModal', playlist.id)
    setOpen(false)
  }

  const openPlaylistDeleteModal = () => {
    modal('PlaylistDeleteModal', playlist)
    setOpen(false)
  }

  return (        
    <PlaylistHeader 
      className="playlist__headerInPlaylist" 
      style={{ backgroundColor: `#${bgColor}`}}
      onClick={openPlaylistInfoModal}
      infoTitle='PLAYLIST'
      img={playlist?.coverURL !== null ? playlist.coverURL : playlist.addedSongs.length > 0 ? coverImage : null}
      infoHeader={playlist.name}
      validProfile={validUser}
    >
      <h6 ref={domNode}  className='playlist__headerInPlaylist__action'>
        <Link to={`/profile/${user.uid}`}>
          {user?.displayName}
        </Link>
        <button onClick={() => setOpen(!open)} className="playlistAction-btn">
          <Icon name='ThreeDots' size={32}/>
        </button>
        {open && 
          <DropdownMenu className='playlistActionMenu'>
            <ul>
              <li>
                <button onClick={openPlaylistInfoModal}>
                  Edit Details
                </button>
              </li>
              <li>
                <button onClick={openPlaylistDeleteModal}>
                  Delete
                </button>
              </li>
            </ul>
          </DropdownMenu>
        }
      </h6>
    </PlaylistHeader>
  )
}

export default PlaylistHeaderInPlaylist