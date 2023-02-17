import React, { useState } from 'react'
import TrackListWrapper from '@/components/Wrappers/TrackListWrapper'
import ScrollWrapper from '@/components/Wrappers/ScrollWrapper'
import PlaylistSearch from '@/Pages/Playlist/Main/Search'
import SongList from '@/Pages/Playlist/Main/SongList'
import GradientBg from '@/components/GradientBg'
import styles from '@/Pages/Playlist/Main/Main.module.scss'

function Main({ playlist, validUser, bgColor, SM }) {
  const [show, setShow] = useState(true)
  const showPlaylist = playlist.addedSongs.length > 0 && show

  return (
    <section className={styles.main}>
      <TrackListWrapper className={styles.trackList}>
        <ScrollWrapper>
          {showPlaylist && <SongList playlist={playlist}/>}
          {validUser && !SM &&
            <PlaylistSearch
              playlist={playlist}
              show={show}
              setShow={setShow}
            />
          }
          <GradientBg bgColor={bgColor}/>
        </ScrollWrapper>
      </TrackListWrapper>
    </section>
  )
}

export default Main