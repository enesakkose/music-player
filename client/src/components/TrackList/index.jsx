import React from 'react'
import clsx from 'clsx'
import styles from '@/components/TrackList/TrackList.module.scss'

function TrackList({children, className}) {
  return (
    <ul className={clsx(styles.trackList, className)}>
      {children}
    </ul>
  )
}

export default TrackList