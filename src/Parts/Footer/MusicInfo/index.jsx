import React from 'react'
import clsx from 'clsx'
import MediaInfo from '@/components/MediaInfo'
import SongCover from '@/components/SongCover'
import { useSelector } from 'react-redux'
import styles from '@/Parts/Footer/MusicInfo/MusicInfo.module.scss'

function MusicInfo() {
  const { openCover } = useSelector(state => state.song)
  const { current } = useSelector(state => state.player)

  return (
    <div className={clsx(styles.musicInfo, openCover ? styles.openCover : '')}>
      <SongCover icon='up'/>
      <MediaInfo className={styles.info} favBtn='22' song={current}/>
    </div>
  )
}

export default MusicInfo