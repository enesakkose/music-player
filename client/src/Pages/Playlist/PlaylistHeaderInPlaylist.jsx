import React, { useState } from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'
import Icon from '@/components/Icon'
import DropdownMenu from '@/components/DropdownMenu'
import Loading from '@/components/Loading'
import MusicIcon from '@/icons/Music.svg'
import { Link } from 'react-router-dom'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useSelector } from 'react-redux'
import { modal } from '@/utils'
import '@/Pages/Playlist/PlaylistHeaderInPlaylist.scss'

function PlaylistHeaderInPlaylist({ playlistId, bgColor }) {
  const { playlists } = useSelector(state => state.playlist)
  const { user } = useSelector(state => state.auth)
  const playlistName = playlists.find((playlist) => playlist.id === playlistId)
  const [ open, setOpen ] = useState(false)
  
  const domNode = useClickOutside(() => { 
    setOpen(false)
  })

  const openPlaylistInfoModal = () => {
    modal('PlaylistInfoModal', playlistName)
    setOpen(false)
  }

  const openPlaylistDeleteModal = () => {
    modal('PlaylistDeleteModal', playlistName)
    setOpen(false)
  }

  if(playlistName === undefined) return <Loading/>

  return (        
    <PlaylistHeader 
      className="playlist__headerInPlaylist" 
      style={{ backgroundColor: `#${bgColor}`}}
      onClick={openPlaylistInfoModal}
      infoTitle='PLAYLIST'
      infoHeader={playlistName.name}
    >
      <h6 ref={domNode}  className='playlist__headerInPlaylist__action'>
        <Link to={`/profile/${user.uid}`}>
          {user?.displayName}
        </Link>
        <button onClick={() => setOpen(!open)} className="playlistAction-btn">
          <Icon name='ThreeDots' size={32}/>
        </button>
        {open && 
          <DropdownMenu  className='playlistActionMenu'>
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