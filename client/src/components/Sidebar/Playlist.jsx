import React from 'react'
import CreatePlaylistBtn from '@/components/CreatePlaylistBtn'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '@/components/Sidebar/Sidebar.scss'

function Playlist() {
  const { playlists } = useSelector(state => state.playlist)

  return (
    <nav className="sidebar__content__playlist">
      <div className='sidebar__content__playlist__title'>
        <h5>YOUR PLAYLIST</h5>
        <CreatePlaylistBtn size={24}/>
      </div>
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