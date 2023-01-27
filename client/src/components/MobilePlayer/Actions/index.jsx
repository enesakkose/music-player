import React from 'react'
import PlayBtn from '@/components/PlayBtn'
import MediaInfo from '@/components/MediaInfo/MediaInfo'
import { handlePlayPause } from '@/utils/player'
import { useSelector } from 'react-redux'
import styles from '@/components/MobilePlayer/Actions/Actions.module.scss'

function Actions() {
  const { current, isPlaying } = useSelector(state => state.player)

  return (
    <div className={styles.actions}>
      <MediaInfo as='h6' img='2.5rem' song={current} />
      <PlayBtn
        className={styles.playBtn}
        onClick={() => handlePlayPause(current, isPlaying)}
        playPause={isPlaying && current.key}
      />
    </div>
  )
}

export default Actions