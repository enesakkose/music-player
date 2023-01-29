import React from 'react'
import PlayBtn from '@/components/PlayBtn'
import clsx from 'clsx'
import { getMobileTabletSize } from '@/utils/size'
import { useSelector } from 'react-redux'
import { usePlaySong } from '@/hooks/usePlaySong'
import styles from '@/components/ActionBtns/ActionBtns.module.scss'

function ActionBtns({findSongs, title, subtitle, songLength, children, className}) {
  const { current, isPlaying } = useSelector(state => state.player)
  const { user } = useSelector(state => state.auth)
  const inSongs = findSongs.some(f => f.key === current.key)
  const size = getMobileTabletSize()

  return (
    <div className={clsx(styles.actionBtns, className)}>
      {size && title && <div className={styles.info}>
        <h1 className={styles.title}>
          {title}
        </h1> 
        <span className={styles.subtitle}>
          {subtitle}
        </span>  
        <span className={styles.songLength}>
          • {songLength} Songs
        </span>
      </div>}
      <PlayBtn
        onClick={() => usePlaySong(findSongs, inSongs, current, isPlaying, user)}
        className={styles.playBtn}
        playPause={isPlaying && inSongs}
      />
      {children}
    </div>
  )
}

export default ActionBtns