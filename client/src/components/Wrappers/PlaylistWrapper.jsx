import React, { forwardRef } from 'react'
import clsx from 'clsx'
import '@/components/Wrappers/PlaylistWrapper.scss'

const PlaylistWrapper = forwardRef(function PlaylistWrapper({children, className, ...props}, ref) {
  return (
    <section ref={ref} className={clsx('playlistWrapper', className)} {...props}>
      {children}
    </section>
  )
})

export default PlaylistWrapper