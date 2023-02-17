import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/UI/Icon'
import PlayBtn from '@/components/IconButtons/PlayBtn'
import Button from '@/components/UI/Button'
import { getBreakPoint } from '@/utils/helpers/media'
import { useSelector } from 'react-redux'
import { handlePlayPause, handleNextSong, handlePrevSong } from '@/utils/helpers/player'
import styles from '@/components/Player/ActionBtns/ActionBtns.module.scss'

function ActionBtns({ className, size = 36 }) {
  const {
    current,
    isPlaying,
    isActive,
    currentIndex,
    currentSongs
  } = useSelector(state => state.player)
  const SM = getBreakPoint('SM')

  return (
    <div className={clsx(styles.actionBtns, className)}>
      <Button
        disabled={!isActive}
        onClick={() => handlePrevSong(currentIndex, currentSongs)}
        className={styles.previousBtn}
        hover='h-primary'
      >
        <Icon name='Previous' size={size} />
      </Button>
      <PlayBtn
        onClick={() => handlePlayPause(current, isPlaying)}
        playPause={isPlaying && current.key}
        className={styles.playBtn}
        size={SM ? 'large' : 'small'}
        color='secondary'
        icon='16'
      />
      <Button
        disabled={!isActive}
        onClick={() => handleNextSong(currentIndex, currentSongs)}
        className={styles.nextBtn}
        hover='h-primary'
      >
        <Icon name='Next' size={size} />
      </Button>
    </div>
  )
}

export default ActionBtns