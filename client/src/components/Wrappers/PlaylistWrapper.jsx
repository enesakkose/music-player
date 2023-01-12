import React from 'react'
import clsx from 'clsx'
import '@/components/Wrappers/PlaylistWrapper.scss'

function PlaylistWrapper({ children, className }) {
  return (
    <div className={clsx('playlistWrapper', className)}>
      {children}
    </div>
  )
}

export default PlaylistWrapper