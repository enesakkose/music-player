import React from 'react'
import Icon from '@/components/Icon'
import '@/components/SongsTableHeader.scss'

function SongsTableHeader({children}) {
  return (
    <div className='songsTableTitle'>
      <div className="songsTableTitle__head">
        <Icon name='Hashtag' size={20}/>
        <h5 className='songsTableTitle__head__text'>
          TITLE
        </h5>
      </div>
      {children}
      <Icon name='add' size={22}/>
    </div>
  )
}

export default SongsTableHeader