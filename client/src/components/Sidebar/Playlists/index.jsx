import React from 'react'
import CreatePlaylistBtn from '@/components/CreatePlaylistBtn'
import NavLink from '@/components/NavLink'
import { useSelector } from 'react-redux'
import styles from '@/components/Sidebar/Playlists/Playlists.module.scss'

function Playlists() {
  const { playlists } = useSelector(state => state.playlist)

  return (
    <nav className={styles.playlists}>
      <div className={styles.title}>
        <h5>YOUR PLAYLIST</h5>
        <CreatePlaylistBtn size={24}/>
      </div>
      <ul className={styles.playlistRows}>
        {playlists.map((playlist) => (
          <NavLink 
            href={`/playlist/${playlist.id}`} 
            activeClassName={styles.active} 
            key={playlist.id}
          >
            {playlist.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}

export default Playlists