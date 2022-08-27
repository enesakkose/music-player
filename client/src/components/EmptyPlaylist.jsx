import React from 'react'
import Icon from '@/components/Icon'
import '@/components/EmptyPlaylist.scss'

function EmptyPlaylist() {
  return (
    <div className='emptyPlaylist'>
      <Icon name='Music' size={48}/>
      <h3>Songs you like will appear here</h3>
      <h4>Save songs by tapping the heart icon.</h4>
      <button className="find-btn">Find Songs</button>
    </div>
  )
}

export default EmptyPlaylist