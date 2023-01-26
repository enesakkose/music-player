import React, { createElement } from 'react'
import clsx from 'clsx'
import FavoriteBtn from '@/components/FavoriteBtn'
import { useSelector } from 'react-redux'
import styles from '@/components/MobilePlayer/MediaInfo/MediaInfo.module.scss'

function MediaInfo({ children, as, className, img, ...props }) {
  const { current } = useSelector(state => state.player)

  return (
    <div className={clsx(styles.mediaInfo, className) } {...props}>
      {img && <div className={styles.cover} style={{ '--size': img }}>
        <img src={current?.images?.coverart} alt={current?.title} />
      </div>}
      <div className={styles.info}>
        {createElement(as, { className: styles.songName }, current?.subtitle)}
        <h5 className={styles.singerName}>{current?.subtitle}</h5>
      </div>
      <FavoriteBtn className={styles.favBtn}  song={current} size={30}/>
      {children}
    </div>
  )
}

export default MediaInfo