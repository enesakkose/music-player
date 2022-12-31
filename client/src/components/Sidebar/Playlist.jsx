import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '@/components/Icon'
import { useSelector } from 'react-redux'
import { addPlaylistHandle } from '@/firebase/db'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import '@/components/Sidebar/Sidebar.scss'

function Playlist() {
  const id = uuidv4()
  const navigate = useNavigate()
  const { playlists } = useSelector(state => state.playlist)
  const { profile: { uid } } = useSelector(state => state.profiles)

  const handleAdd = () => {
    addPlaylistHandle(playlists, id, uid)
    navigate(`/playlist/${id}`, { replace: true })
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