import React, { createElement} from 'react'
import clsx from 'clsx'
import '@/components/MobilePlayer/MediaInfo.scss'

function MediaInfo({ children, as, className, name, singerName }) {
  return (
    <div className={clsx('mediaInfo', className)}>
      <div className='info'>
        {React.createElement(as, { className: 'mediaInfoName'}, name)}
        <h5 className='mediaInfoSingerName'>{singerName}</h5>
      </div>
      {children}
    </div>
  )
}

export default MediaInfo