import React, { forwardRef } from 'react'
import clsx from 'clsx'
import '@/components/Wrappers/PlaylistWrapper.scss'

const PlaylistWrapper = forwardRef(function PlaylistWrapper({children, className}, ref) {
  return (
    <section ref={ref} className={clsx('playlistWrapper', className)}>
      {children}
    </section>
  )
})

export default PlaylistWrapper