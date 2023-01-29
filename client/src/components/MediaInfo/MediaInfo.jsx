import React, { createElement } from 'react'
import clsx from 'clsx'
import FavoriteBtn from '@/components/FavoriteBtn'
import { useNavigate } from 'react-router-dom'
import styles from '@/components/MediaInfo/MediaInfo.module.scss'

function MediaInfo({ 
  children, 
  as, 
  className, 
  img, 
  favBtn = '30',
  song,
  ...props 
  }) {
  const navigate = useNavigate()
  
  const navigateHandle = () => {
    navigate(`/album/${song?.key}`)
  }

  return (
    <div className={clsx(styles.mediaInfo, className) } {...props}>
      {img && <div className={styles.cover} style={{ '--size': img }}>
        <img src={song?.images?.coverart} alt={song?.title} loading={props.loading}/>
      </div>}
      <div className={styles.info}>
        {createElement(
          as, 
          { className: styles.songName, onClick: navigateHandle }, 
          song?.title
        )}
        <h6 className={styles.singerName}>{song?.subtitle}</h6>
      </div>
      {children}
      <FavoriteBtn className={styles.favBtn} song={song} size={favBtn}/>
    </div>
  )
}

export default MediaInfo