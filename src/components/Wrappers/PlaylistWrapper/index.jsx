import React, { forwardRef } from 'react'
import ScrollWrapper from '@/components/Wrappers/ScrollWrapper'
import clsx from 'clsx'
import styles from '@/components/Wrappers/PlaylistWrapper/PlaylistWrapper.module.scss'

const PlaylistWrapper = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <section ref={ref} className={clsx(styles.playlistWrapper, className)} {...props}>
      <ScrollWrapper>
        {children}
      </ScrollWrapper>
    </section>
  )
})

export default PlaylistWrapper