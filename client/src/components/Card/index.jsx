import React from 'react'
import PlayBtn from '@/components/PlayBtn'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { getMobileTabletSize } from '@/utils/size'
import { Link } from 'react-router-dom'
import Button from '@/components/Button'
import styles from '@/components/Card/Card.module.scss'

function Card({
  style = null,
  name,
  title,
  href,
  playBtn = true,
  playPause,
  onClick,
  className,
  children,
  ...props }) {
  const size = getMobileTabletSize()
  const navigate = useNavigate()

  return (
    <div className={styles.card} {...props}>
      <div className={styles.cardImgContainer} style={style}>
        <div className={styles.cardImg}>
          <div onClick={() => size ? navigate(href) : undefined} className={styles.imgContainer}>
            {/*this div created so it can come in svg */}
            {children}
            {playBtn && !size && <PlayBtn
              onClick={onClick}
              playPause={playPause}
              className={clsx(styles.playBtn, playPause ? styles.showBtn : '', className)}
            />}
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <h5 onClick={size ? onClick : undefined} className={styles.title}>
          {title}
        </h5>
        {!size && <span className={styles.subtitle}>{name}</span>}
      </div>
      {!size && <Button href={href} className={styles.href}/>}
    </div>
  )
}

export default Card