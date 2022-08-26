import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '@/components/Icon'
import { useSelector, useDispatch } from 'react-redux'
import { addPlaylist } from '@/store/Playlist'
import { v4 as uuidv4 } from 'uuid'
import '@/components/Sidebar/Sidebar.scss'

function Playlist() {
  const dispatch = useDispatch()
  const { playlists } = useSelector(state => state.playlist)
  
  const handleAdd = () => {
    dispatch(addPlaylist({
      name: `My Playlist #${playlists.length + 1}`,
      id : uuidv4()
    }))
  }
  console.log(playlists)
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
            <li>
              <NavLink key={playlist.id} to={`/collection/${playlist.id}`}>
                {playlist.name}
              </NavLink>
            </li>
          ))}
        </ul>
    </nav>
  )
}

export default Playlist