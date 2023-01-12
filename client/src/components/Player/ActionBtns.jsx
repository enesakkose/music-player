import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import PlayBtn from '@/components/PlayBtn'
import { useSelector } from 'react-redux'
import { handlePlayPause, handleNextSong, handlePrevSong } from '@/utils/player'
import '@/components/Player/ActionBtns.scss'

function ActionBtns({ className, size= 36 }) {
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
        className='actionPlayBtn' 
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

export default ActionBtns