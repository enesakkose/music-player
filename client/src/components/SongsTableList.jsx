import React from 'react'
import Icon from '@/components/Icon'
import '@/components/SongsTableList.scss'

function SongsTableList({children, index, song}) {
  return (
    <div className='songsTableListItem'>
      <div className='songsTableListItem__indexPlay'>
        <span className='songsTableListItem__indexPlay__index'>
          {index + 1}
        </span>
        <button className='songsTableListItem__indexPlay__playBtn'>
          <Icon name='Play'/>
        </button>
      </div>

      <h4 className='songsTableListItem__text'>
        {song.title}
        <span>{song.subtitle}</span>
      </h4>
      {children}
      <span className='songsTableListItem__time'>
        2:47
      </span>
    </div>
  )
}

export default SongsTableList