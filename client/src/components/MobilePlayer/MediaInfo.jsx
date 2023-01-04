import React from 'react'
import clsx from 'clsx'
import '@/components/MobilePlayer/MediaInfo.scss'

function MediaInfo({ children, className, name, singerName }) {
  return (
    <div className={clsx('mediaInfo', className)}>
      <div className='info'>
        <h5>{name}</h5>
        <span>{singerName}</span>
      </div>
      {children}
    </div>
  )
}

export default MediaInfo