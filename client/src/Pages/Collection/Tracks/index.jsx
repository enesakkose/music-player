import React from 'react'
import Header from '@/components/Playlist/Header'
import Main from '@/Pages/Collection/Tracks/Main'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from '@/Pages/Collection/Tracks/Tracks.module.scss'

function Tracks() {
  const { profile: { favorites, uid, displayName } } = useSelector(state => state.profiles)

  return (
    <div className={styles.favTracks}>
      <Header
        className={styles.header}
        type='PLAYLIST'
        title='LIKED SONGS'
      >
        <div className={styles.navBtn}>
          <Link to={`/profile/${uid}`}>
            {displayName}
          </Link>
          {favorites.length > 0 && <h6>• {favorites.length} songs</h6>}
        </div>
      </Header>
      <Main favorites={favorites}/>
    </div>
  )
}

export default Tracks