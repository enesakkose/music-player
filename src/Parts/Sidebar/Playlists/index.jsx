import React from 'react'
import CreatePlaylistBtn from '@/components/IconButtons/CreatePlaylistBtn'
import ScrollWrapper from '@/components/Wrappers/ScrollWrapper'
import NavLink from '@/components/UI/Button/NavLink'
import { useSelector } from 'react-redux'
import styles from '@/Parts/Sidebar/Playlists/Playlists.module.scss'

function Playlists() {
  const { playlists } = useSelector(state => state.playlist)

  return (
    <nav className={styles.playlists}>
      <div className={styles.title}>
        <h5>YOUR PLAYLIST</h5>
        <CreatePlaylistBtn size={24} />
      </div>
      <ul className={styles.playlistRows}>
        <ScrollWrapper>
          {playlists.map((playlist) => (
            <NavLink
              href={`/playlist/${playlist.id}`}
              activeClassName={styles.active}
              key={playlist.id}
            >
              {playlist.name}
            </NavLink>
          ))}
        </ScrollWrapper>
      </ul>
    </nav>
  )
}

export default Playlists