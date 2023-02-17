import React from 'react'
import clsx from 'clsx'
import Header from '@/components/TrackList/Header'
import { getBreakPoint } from '@/utils/helpers/media'
import styles from '@/components/TrackList/TrackList.module.scss'

function TrackList({ children, header = true, className }) {
  const SM = getBreakPoint('SM')

  return (
    <>
      {header && !SM && <Header />}
      <ul className={clsx(styles.trackList, className)}>
        {children}
      </ul>
    </>
  )
}

export default TrackList