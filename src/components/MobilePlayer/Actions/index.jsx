import React from 'react'
import PlayBtn from '@/components/IconButtons/PlayBtn'
import MediaInfo from '@/components/MediaInfo'
import { handlePlayPause } from '@/utils/helpers/player'
import { useSelector } from 'react-redux'
import styles from '@/components/MobilePlayer/Actions/Actions.module.scss'

function Actions() {
  const { current, isPlaying } = useSelector(state => state.player)

  return (
    <div className={styles.actions}>
      <MediaInfo img='2.5rem' song={current}/>
      <PlayBtn
        color='tertiary'
        size='xsmall'
        onClick={() => handlePlayPause(current, isPlaying)}
        playPause={isPlaying && current.key}
      />
    </div>
  )
}

export default Actions