import React, { useState } from 'react'
import PlayBtn from '@/components/PlayBtn'
import clsx from 'clsx'
import { useSelector, useDispatch } from 'react-redux'
import { usePlaySong } from '@/hooks/usePlaySong'
import '@/components/ActionBtns.scss'

function ActionBtns({findSongs, children, className}) {
  const { current, isPlaying } = useSelector(state => state.player)
  const haveSongs = findSongs.some(f => f.key === current.key)

  return (
    <div className={clsx('actionBtns', className)}>
      <PlayBtn
        onClick={() => usePlaySong(findSongs, current, isPlaying)}
        className='actionBtns__play'
        playPause={isPlaying && haveSongs}
      />
      {children}
    </div>
  )
}

export default ActionBtns