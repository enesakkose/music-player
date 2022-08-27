import React,{ useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useClickOutside } from '@/hooks/useClickOutside'
import PlaylistHeader from '@/components/PlaylistHeader'
import Icon from '@/components/Icon'
import DropdownMenu from '@/components/DropDownMenu'
import '@/Pages/Playlist/Playlist.scss'


function Playlist() {
  const params = useParams()

  const { playlists } = useSelector(state => state.playlist)
  const playlistName = playlists.find((playlist) => playlist.id === params.id)

  const [ open, setOpen ] = useState(false)
  
  const domNode = useClickOutside(() => { 
    setOpen(false)
  })

  return (
    <div className='playlist'>
      //!  single classnames in child element is coming from PlaylistHeader components
        <PlaylistHeader className="playlist__header">
           <div className="playlist__header__cover cover">
            <Icon name='Music' size={75}/>
            <span className="playlist__header__cover__action">
                <Icon name='Pencil' size={48}/>
                Choose Photo
            </span>
           </div>
           <div ref={domNode} className="playlist__header__info info">
            <h6>PLAYLIST</h6>
            <h1>{playlistName?.name}</h1>
            <h6 className='playlist__header__info__userName'>
                <Link to='/'>
                Aaa(username)
                </Link>
                <button onClick={() => setOpen(!open)} className="playlistAction-btn">
                  <Icon name='ThreeDots' size={32}/>
                </button>
                {open && 
                <DropdownMenu  className='playlistActionMenu'>
                  <ul>
                    <li>
                      <button>Edit Details</button>
                    </li>
                    <li>
                      <button>Delete</button>
                    </li>
                  </ul>
                </DropdownMenu>}
            </h6>
            
           </div>
        </PlaylistHeader>
        
    </div>
  )
}

export default Playlist