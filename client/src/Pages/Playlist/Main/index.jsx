import React, { useState } from 'react'
import TrackListWrapper from '@/components/Wrappers/TrackListWrapper'
import PlaylistSearch from '@/Pages/Playlist/Main/Search'
import SongList from '@/Pages/Playlist/Main/SongList'
import GradientBg from '@/components/GradientBg'
import styles from '@/Pages/Playlist/Main/Main.module.scss'

function Main({ playlist, validUser, bgColor, size }) {
  const [show, setShow] = useState(true)
  const showPlaylist = playlist.addedSongs.length > 0 && show

  return (
    <section className={styles.main}>
      <TrackListWrapper className={styles.trackList}>
        {showPlaylist && <SongList playlist={playlist} size={size} />}
        {validUser && !size &&
          <PlaylistSearch
            playlist={playlist}
            show={show}
            setShow={setShow}
          />
        }
        <GradientBg bgColor={bgColor}/>
      </TrackListWrapper>
    </section>
  )
}

export default Main