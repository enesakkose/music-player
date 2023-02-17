import React from 'react'
import PlayBtn from '@/components/IconButtons/PlayBtn'
import clsx from 'clsx'
import { getBreakPoint } from '@/utils/helpers/media'
import { useSelector } from 'react-redux'
import { usePlaySong } from '@/utils/hooks/usePlaySong'
import styles from '@/components/ActionBtns/ActionBtns.module.scss'

function ActionBtns({ songs, title, subtitle, songLength, children, className }) {
  const { current, isPlaying } = useSelector(state => state.player)
  const { user } = useSelector(state => state.auth)
  const inSongs = songs.some(f => f.key === current.key)
  const SM = getBreakPoint('SM')

  return (
    <div className={clsx(styles.actionBtns, className)}>
      {SM && title && <div className={styles.info}>
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
        onClick={() => usePlaySong(songs, inSongs, current, isPlaying, user)}
        size='large'
        playPause={isPlaying && inSongs}
      />
      {children}
    </div>
  )
}

export default ActionBtns