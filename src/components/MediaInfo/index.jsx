import React from 'react'
import clsx from 'clsx'
import FavoriteBtn from '@/components/IconButtons/FavoriteBtn'
import Button from '@/components/UI/Button'
import { useSelector } from 'react-redux'
import styles from '@/components/MediaInfo/MediaInfo.module.scss'

function MediaInfo({ 
    children,
    as,
    className,
    img,
    favBtn = '30',
    song,
    onClick,
    ...props
  }) {
  const { user } = useSelector(state => state.auth)

  return (
    <div className={clsx(styles.mediaInfo, className) } {...props}>
      {img && <div className={styles.cover} style={{ '--size': img }}>
        <img src={song?.images?.coverart} alt={song?.title} loading={props.loading}/>
      </div>}
      <div className={styles.info}>
        <Button
          className={styles.songName} 
          align='start'
          variant='underline' 
          href={`/album/${song?.key}`}
          onClick={onClick}
        >
          {song?.title}
        </Button>
        <span className={styles.singerName}>{song?.subtitle}</span>
      </div>
      {children}
      {user && <FavoriteBtn className={styles.favBtn} song={song} size={favBtn}/>}
    </div>
  )
}

export default MediaInfo