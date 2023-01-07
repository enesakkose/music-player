import React from 'react'
import { getMobileTabletSize } from '@/utils/size'
import styles from '@/components/TrackList/Row/Row.module.scss'

function Cover({song}) {
  const size = getMobileTabletSize()
  
  return (
    <>
      {!size && <img 
        className={styles.cover} 
        src={song?.images?.coverart} 
        alt="cover"
        loading='lazy'
      />}
    </>
  )
}

export default Cover