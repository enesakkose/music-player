import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/UI/Icon'
import Button from '@/components/UI/Button'
import styles from '@/components/IconButtons/PlayBtn/PlayBtn.module.scss'

function PlayBtn({ className, playPause, ...props }) {
  return (
    <Button className={clsx(styles.playBtn, className)} {...props}>
      <Icon name={playPause ? 'Stop' : 'Play'} size={22} />
    </Button>
  )
}

export default PlayBtn