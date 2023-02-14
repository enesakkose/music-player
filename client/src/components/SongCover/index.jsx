import React from 'react'
import clsx from 'clsx'
import SongCoverBtn from '@/components/IconButtons/SongCoverBtn'
import { useSelector } from 'react-redux'
import styles from '@/components/SongCover/SongCover.module.scss'

function SongCover({ size = 'small', icon = 'downv2' }) {
  const { current } = useSelector(state => state.player)

  return (
    <div className={clsx(styles.songCover, styles[size])}>
      <img
        src={current?.images?.coverart}
        alt={current?.title}
      />
      <SongCoverBtn className={styles.openBtn} icon={icon}/>
    </div>
  )
}

export default SongCover