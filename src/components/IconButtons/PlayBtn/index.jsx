import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/UI/Icon'
import Button from '@/components/UI/Button'
import styles from '@/components/IconButtons/PlayBtn/PlayBtn.module.scss'

function PlayBtn({ className, playPause, icon = '22', size, color = 'primary', ...props }) {
  return (
    <Button className={clsx(styles.playBtn, styles[color], styles[size], className)} {...props}>
      <Icon name={playPause ? 'Stop' : 'Play'} size={icon}/>
    </Button>
  )
}

export default PlayBtn