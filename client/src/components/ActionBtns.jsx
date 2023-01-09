import React from 'react'
import PlayBtn from '@/components/PlayBtn'
import clsx from 'clsx'
import { getMobileTabletSize } from '@/utils/size'
import { useSelector } from 'react-redux'
import { usePlaySong } from '@/hooks/usePlaySong'
import '@/components/ActionBtns.scss'

function ActionBtns({findSongs, title, subtitle, songLength, children, className}) {
  const { current, isPlaying } = useSelector(state => state.player)
  const { user } = useSelector(state => state.auth)
  const inSongs = findSongs.some(f => f.key === current.key)
  const size = getMobileTabletSize()

  return (
    <div className={clsx('actionBtns', className)}>
      {size && title && <div className="mobileInfo">
        <h1 className="mobileInfoTitle">
          {title}
        </h1> 
        <span className="mobileInfoSubtitle">
          {subtitle}
        </span>  
        <span className="mobileInfoListLength">
          • {songLength} Songs
        </span>
      </div>}
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