import React from 'react'
import Icon from '@/components/Icon'
import { addPlaylist } from '@/utils/playlist'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '@/components/Sidebar/Sidebar.scss'

function Playlist() {
  const navigate = useNavigate()
  const { playlists } = useSelector(state => state.playlist)
  const { profile: { uid } } = useSelector(state => state.profiles)

  const handleAdd = () => {
    addPlaylist(playlists, uid, navigate)
  }

  return (
    <nav className="sidebar__content__playlist">
      <h5 className='sidebar__content__playlist__title'>
        YOUR PLAYLIST
        <button onClick={handleAdd} className='add-btn'>
          <Icon name='Add' size={24}/> 
        </button>
      </h5>
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