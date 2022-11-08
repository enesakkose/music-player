import React, { useState } from 'react'
import PlayBtn from '@/components/PlayBtn'
import clsx from 'clsx'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrent, playPause, setCurrentSongs } from '@/store/player'
import '@/components/ActionBtns.scss'

function ActionBtns({findSongs, children, className}) {
  const dispatch = useDispatch()
  const { current, isPlaying } = useSelector(state => state.player)
  const haveSongs = findSongs.some(f => f.key === current.key)

  const playAlbumSong = () => {
    if(current.key !== findSongs[0].key && haveSongs) 
    return dispatch(playPause(!isPlaying))

    dispatch(setCurrent(findSongs[0]))
    dispatch(setCurrentSongs(findSongs))
    
    if(current.key === findSongs[0].key) return dispatch(playPause(!isPlaying))
    if(current.key !== findSongs[0].key) return dispatch(playPause(true))
  }

  return (
    <div className={clsx('actionBtns', className)}>
      <PlayBtn
        onClick={playAlbumSong}
        className='actionBtns__play'
        playPause={isPlaying && haveSongs}
      />
      {children}
    </div>
  )
}

export default ActionBtns