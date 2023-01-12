import React from 'react'
import Icon from '@/components/Icon'
import styles from '@/components/TrackList/Row/Row.module.scss'

function PlayBtn({ validMusic, index }) {
  return (
    <div className={styles.playBtnContent}>
      <span className={styles.index}>
        {index + 1}
      </span>
      <div className={styles.playBtn}>
        <Icon name={validMusic ? 'Stop' : 'Play'}/>
      </div>
    </div>
  )
}

export default PlayBtn