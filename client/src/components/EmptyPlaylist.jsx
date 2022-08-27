import React from 'react'
import Icon from '@/components/Icon'
import '@/components/EmptyPlaylist.scss'

function EmptyPlaylist({title, text, children}) {
  return (
    <div className='emptyPlaylist'>
      <Icon name='Music' size={48}/>
      <h3>{title}</h3>
      <p>{text}</p>
      {children}
    </div>
  )
}
export default EmptyPlaylist