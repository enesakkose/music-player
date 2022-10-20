import React from 'react'
import clsx from 'clsx'
import '@/components/PlaylistHeader.scss'

function PlaylistHeader({ className, children, style}) {
  return (
    <header className={clsx('playlistHeader', className)} style={style}>
      {children}
    </header>
  )
}

export default PlaylistHeader