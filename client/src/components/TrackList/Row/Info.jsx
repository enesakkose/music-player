import React from 'react'
import styles from '@/components/TrackList/Row/Row.module.scss'

function Info({song}) {
  return (
    <div className={styles.info}>
      <h5 className={styles.title}>
        {song.title}
      </h5>
      <h6 className={styles.subtitle}>
        {song.subtitle}
      </h6>
    </div>
  )
}

export default Info