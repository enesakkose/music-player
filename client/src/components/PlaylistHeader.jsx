import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import '@/components/PlaylistHeader.scss'

function PlaylistHeader({ 
  className, 
  children, 
  style, 
  infoTitle, 
  infoHeader, 
  img= null,
  validProfile= false, 
  ...props }) {

  return (
    <header className={clsx('playlistHeader', className)} style={style}>
      <button {...props} className='playlistHeader__cover'>
        {img === null && <Icon name={infoHeader === 'LIKED SONGS' ? 'Favorite' : 'Music'} size={75}/>}
        {img !== null && <img
          referrerPolicy="no-referrer" 
          src={img}
          alt="img"
          className='cover'
        />}
        {validProfile && <span className='pencil'>
          <Icon name='Pencil' size={48} className='pencil'/>
        </span>}
      </button>
      <div className="info">
        <h6 className='info__title'>{infoTitle}</h6>
        <h1 className='info__header'>{infoHeader}</h1>
        {children}
      </div>
    </header>
  )
}

export default PlaylistHeader