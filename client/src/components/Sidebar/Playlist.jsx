import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '@/components/Icon'
import { useSelector } from 'react-redux'
import { addPlaylistHandle } from '@/utils'
import { v4 as uuidv4 } from 'uuid'
import '@/components/Sidebar/Sidebar.scss'


function Playlist() {
  
  const { playlists } = useSelector(state => state.playlist)
  
  const handleAdd = () => {
    addPlaylistHandle({
      name: `My Playlist #${playlists.length + 1}`,
      id : uuidv4()
    })
  }

  return (
    <nav className="sidebar__content__playlist">
        <h4>
         YOUR PLAYLIST
         <button onClick={handleAdd} className='add-btn'>
          <Icon name='Add' size={23}/> 
         </button>
        </h4>
        <ul className="sidebar__content__playlist__items">
          {playlists.map((playlist) => (
            <li key={playlist.id}>
              <NavLink to={`/playlist/${playlist.id}`}>
                {playlist.name}
              </NavLink>
            </li>
          ))}
        </ul>
    </nav>
  )
}

export default Playlist