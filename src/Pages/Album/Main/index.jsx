import React from 'react'
import GradientBg from '@/components/GradientBg'
import TrackListWrapper from '@/components/Wrappers/TrackListWrapper'
import ActionBtns from '@/components/ActionBtns'
import List from '@/Pages/Album/Main/List'
import styles from '@/Pages/Album/Album.module.scss'

function Main({ songs, album, backgroundColor }) {
  return (
    <TrackListWrapper className={styles.content}>
      <ActionBtns
        title={album.title}
        subtitle={album.subtitle}
        songLength={songs.length}
        songs={songs}
      />
      <List songs={songs}/>
      <GradientBg bgColor={backgroundColor}/>
    </TrackListWrapper>
  )
}

export default Main