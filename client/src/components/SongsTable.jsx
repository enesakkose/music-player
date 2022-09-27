import React from 'react'
import Icon from '@/components/Icon'
import '@/components/SongsTable.scss'

function SongsTable({children}) {
  return (
    <div className='songsTableTitle'>
      <Icon name='Hashtag' size={20}/>
      <h4 className='songsTableTitle__head'>
        TITLE
      </h4>
      {children}
      <Icon name='Favorite' size={22}/>
    </div>
  )
}

export default SongsTable