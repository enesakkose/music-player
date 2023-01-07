import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import NavigateBtn from '@/components/PlaylistHeader/NavigateBtn'
import { getMobileTabletSize } from '@/utils/size'
import '@/components/PlaylistHeader/PlaylistHeader.scss'

function PlaylistHeader({
  className,
  children,
  style,
  infoTitle,
  infoHeader,
  img = null,
  validProfile = false,
  scrollTop = false,
  bg = false,
  ...props }) {
  const size = getMobileTabletSize()

  return (
    <header className={clsx('playlistHeader', className)} style={style}>
      {size && <NavigateBtn scrollTop={scrollTop} bg={bg} />}
      <div {...props} className='playlistHeader__cover'>
        {img === null && <Icon name={infoHeader === 'LIKED SONGS' ? 'Favorite' : 'Music'} size={75} />}
        {img !== null && <img
          referrerPolicy="no-referrer"
          src={img}
          alt="img"
          className='cover'
          loading='lazy'
        />}
        {validProfile && <span className='pencil'>
          <Icon name='Pencil' size={48} className='pencil' />
        </span>}
      </div>
      {!size && <div className="info">
        <h6 className='info__title'>{infoTitle}</h6>
        <h1 className='info__header'>{infoHeader}</h1>
        {children}
      </div>}
    </header>
  )
}

export default PlaylistHeader