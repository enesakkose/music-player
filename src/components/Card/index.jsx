import React from 'react'
import clsx from 'clsx'
import Info from '@/components/Card/Info'
import PlayBtn from '@/components/IconButtons/PlayBtn'
import ImgBox from '@/components/Card/ImgBox'
import Button from '@/components/UI/Button'
import { getBreakPoint } from '@/utils/helpers/media'
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
  const SM = getBreakPoint('SM')

  return (
    <div className={styles.card} {...props}>
      <ImgBox className={className} style={style} onClick={onClick}>
        {children}
        {playBtn && !SM && <PlayBtn
          onClick={onClick}
          playPause={playPause}
          className={clsx(styles.playBtn, playPause ? styles.showBtn : '')}
        />}
      </ImgBox>
      <Info name={name} href={href} title={title}/>
      {!SM && <Button href={href} className={styles.href}/>}
    </div>
  )
}

export default Card