import React, { useState } from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'
import Icon from '@/components/Icon'
import DropdownMenu from '@/components/DropdownMenu'
import Loading from '@/components/Loading'
import { useFindPlaylist } from '@/hooks/useFindPlaylist'
import { Link } from 'react-router-dom'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useSelector } from 'react-redux'
import { modal } from '@/utils'
import '@/Pages/Playlist/PlaylistHeaderInPlaylist.scss'

function PlaylistHeaderInPlaylist({ playlistId, bgColor }) {
  const findPlaylist = useFindPlaylist(playlistId)
  const { user } = useSelector(state => state.auth)
  const [ open, setOpen ] = useState(false)
  const coverImage = findPlaylist?.addedSongs[0]?.track?.images?.coverart

  const domNode = useClickOutside(() => { 
    setOpen(false)
  })

  const openPlaylistInfoModal = () => {
    modal('PlaylistInfoModal', findPlaylist.id)
    setOpen(false)
  }

  const openPlaylistDeleteModal = () => {
    modal('PlaylistDeleteModal', findPlaylist)
    setOpen(false)
  }

  if(findPlaylist === undefined) return <Loading/>

  return (        
    <PlaylistHeader 
      className="playlist__headerInPlaylist" 
      style={{ backgroundColor: `#${bgColor}`}}
      onClick={openPlaylistInfoModal}
      infoTitle='PLAYLIST'
      img={findPlaylist.coverURL !== null ? findPlaylist.coverURL : findPlaylist.addedSongs.length > 0  ? coverImage : null}
      infoHeader={findPlaylist.name}
      validProfile={true}//todo
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