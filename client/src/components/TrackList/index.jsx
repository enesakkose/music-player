import React from 'react'
import clsx from 'clsx'
import Header from '@/components/TrackList/Header'
import { getMobileTabletSize } from '@/utils/size'
import styles from '@/components/TrackList/TrackList.module.scss'

function TrackList({ children, header = true, className }) {
  const size = getMobileTabletSize()

  return (
    <>
      {header && !size && <Header/>}
      <ul className={clsx(styles.trackList, className)}>
        {children}
      </ul>
    </>
  )
}

export default TrackList