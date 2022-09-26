import React from 'react'
import '@/components/PlaylistHeader.scss'

function PlaylistHeader({ className, children, style}) {
  return (
    <header className={`playlistHeader ${className}`} style={style}>
      {children}
    </header>
  )
}

export default PlaylistHeader