import React from 'react'
import clsx from 'clsx'
import Header from '@/components/MobilePlayer/Player/Header/Header'
import ProgressBar from '@/components/Player/ProgressBar'
import ActionBtns from '@/components/Player/ActionBtns'
import MediaInfo from '@/components/MediaInfo'
import Cover from '@/components/MobilePlayer/Player/Cover'
import { useSelector } from 'react-redux'
import styles from '@/components/MobilePlayer/Player/Player.module.scss'

function Player({ expand, setExpand }) {
  const { current } = useSelector(state => state.player)
  const bg = current?.images?.joecolor?.slice(18, 24)

  return (
    <div
      className={clsx(styles.player, expand ? styles.expand : styles.shrink)}
      style={{ backgroundColor: `#${bg}` }}
    >
      <Header setExpand={setExpand} />
      <Cover cover={current?.images?.coverart} />
      <MediaInfo as='h2' className={styles.info} song={current} />
      <ProgressBar mobile={true} />
      <ActionBtns size={54} />
    </div>
  )
}

export default Player