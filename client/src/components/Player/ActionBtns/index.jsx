import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import PlayBtn from '@/components/PlayBtn'
import Button from '@/components/Button'
import { useSelector } from 'react-redux'
import { handlePlayPause, handleNextSong, handlePrevSong } from '@/utils/player'
import styles from '@/components/Player/ActionBtns/ActionBtns.module.scss'

function ActionBtns({ className, size= 36 }) {
  const { 
    current, 
    isPlaying, 
    isActive, 
    currentIndex, 
    currentSongs 
  } = useSelector(state => state.player)

  return (
    <div className={clsx(styles.actionBtns, className)}>
      <Button
        disabled={!isActive}
        onClick={() => handlePrevSong(currentIndex, currentSongs)} 
        className={styles.previousBtn}
      >
        <Icon name='Previous' size={size}/>
      </Button>
      <PlayBtn
        onClick={() => handlePlayPause(current, isPlaying)} 
        playPause={isPlaying && current.key} 
        className={styles.playBtn} 
      />
      <Button
        disabled={!isActive} 
        onClick={() => handleNextSong(currentIndex, currentSongs)} 
        className={styles.nextBtn}
      >
        <Icon name='Next' size={size}/>
      </Button>
    </div>
  )
}

export default ActionBtns