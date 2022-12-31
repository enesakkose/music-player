import React from 'react'
import PlayBtn from '@/components/PlayBtn'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { usePlaySong } from '@/hooks/usePlaySong'
import '@/components/ActionBtns.scss'

function ActionBtns({findSongs, children, className}) {
  const { current, isPlaying } = useSelector(state => state.player)
  const { user } = useSelector(state => state.auth)
  const inSongs = findSongs.some(f => f.key === current.key)

  return (
    <div className={clsx('actionBtns', className)}>
      <PlayBtn
        onClick={() => usePlaySong(findSongs, inSongs, current, isPlaying, user)}
        className='actionBtns__play'
        playPause={isPlaying && inSongs}
      />
      {children}
    </div>
  )
}

export default ActionBtns