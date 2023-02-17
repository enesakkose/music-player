import React from 'react'
import Header from '@/components/Playlist/Header'
import Main from '@/Pages/Collection/Tracks/Main'
import Button from '@/components/UI/Button'
import PlaylistWrapper from '@/components/Wrappers/PlaylistWrapper'
import Avatar from '@/components/Avatar'
import { useSelector } from 'react-redux'
import styles from '@/Pages/Collection/Tracks/Tracks.module.scss'

function Tracks() {
  const { profile: { favorites, uid, displayName, photoURL } } = useSelector(state => state.profiles)

  return (
    <PlaylistWrapper className={styles.favTracks}>
      <Header
        className={styles.header}
        type='PLAYLIST'
        title='LIKED SONGS'
      >
        <div className={styles.navBtn}>
          <Button href={`/profile/${uid}`} variant='underline'>
            {photoURL && <Avatar src={photoURL} size='1.75rem' className={styles.avatar} />}
            {displayName}
          </Button>
          {favorites.length > 0 && <h6>• {favorites.length} songs</h6>}
        </div>
      </Header>
      <Main />
    </PlaylistWrapper>
  )
}

export default Tracks