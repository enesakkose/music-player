import React  from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import styles from '@/components/PlayBtn.module.scss'

function PlayBtn({ className, playPause, onClick, ...props } ) {

  return (
    <button onClick={onClick} className={clsx(styles.playBtn, className)} {...props}>
      <Icon name={playPause ? 'Stop' : 'Play'} size={22}/>
    </button>
  )
}

export default PlayBtn