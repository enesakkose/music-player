import React from 'react'
import GradientBg from '@/components/GradientBg'
import TrackListWrapper from '@/components/Wrappers/TrackListWrapper'
import ActionBtns from '@/components/ActionBtns'
import List from '@/Pages/Album/Main/List'
import styles from '@/Pages/Album/Album.module.scss'

function Main({ findSongs, findAlbum, backgroundColor, size }) {
  return (
    <TrackListWrapper className={styles.content}>
      <ActionBtns
        title={findAlbum.title}
        subtitle={findAlbum.subtitle}
        songLength={findSongs.length}
        findSongs={findSongs}
      />
      <List size={size} songs={findSongs}/>
      <GradientBg bgColor={backgroundColor}/>
    </TrackListWrapper>
  )
}

export default Main