import React from 'react'
import Header from '@/components/Playlist/Header'
import Main from '@/Pages/Collection/Tracks/Main'
import Button from '@/components/Button'
import PlaylistWrapper from '@/components/Wrappers/PlaylistWrapper'
import { useSelector } from 'react-redux'
import styles from '@/Pages/Collection/Tracks/Tracks.module.scss'

function Tracks() {
  const { profile: { favorites, uid, displayName } } = useSelector(state => state.profiles)

  return (
    <PlaylistWrapper className={styles.favTracks}>
      <Header
        className={styles.header}
        type='PLAYLIST'
        title='LIKED SONGS'
      >
        <div className={styles.navBtn}>
          <Button href={`/profile/${uid}`} className={styles.href}>
            {displayName}
          </Button>
          {favorites.length > 0 && <h6>• {favorites.length} songs</h6>}
        </div>
      </Header>
      <Main/>
    </PlaylistWrapper>
  )
}

export default Tracks