import React from 'react'
import clsx from 'clsx'
import styles from '@/components/Wrappers/TrackListWrapper/TrackListWrapper.module.scss'

function TrackListWrapper({ children, className }) {
  return (
    <div className={clsx(styles.trackListWrapper, className)}>
      {children}
    </div>
  )
}

export default TrackListWrapper