import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import PlayBtn from '@/components/PlayBtn'
import { useSelector } from 'react-redux'
import { handlePlayPause, handleNextSong, handlePrevSong } from '@/utils/player'
import '@/components/Footer/PlayerActionBtns.scss'

function PlayerActionBtns({ className, size }) {
  const { 
    current, 
    isPlaying, 
    isActive, 
    currentIndex, 
    currentSongs 
  } = useSelector(state => state.player)

  return (
    <div className={clsx('playerActionBtns', className)}>
      <button
        disabled={!isActive}
        onClick={() => handlePrevSong(currentIndex, currentSongs)} 
        className='previousBtn'
      >
        <Icon name='Previous' size={size}/>
      </button>
      <PlayBtn
        onClick={() => handlePlayPause(current, isPlaying)} 
        playPause={isPlaying && current.key} 
        className='playerPlayBtn' 
      />
      <button
        disabled={!isActive} 
        onClick={() => handleNextSong(currentIndex, currentSongs)} 
        className='nextBtn'
      >
        <Icon name='Next' size={size}/>
      </button>
    </div>
  )
}

export default PlayerActionBtns