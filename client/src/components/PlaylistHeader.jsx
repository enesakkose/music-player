import React from 'react'
import Icon from '@/components/Icon'
import '@/components/PlaylistHeader.scss'

function PlaylistHeader({ className, children }) {
  return (
    <header className={`playlistHeader ${className}`}>
       {children}
    </header>
  )
}

export default PlaylistHeader