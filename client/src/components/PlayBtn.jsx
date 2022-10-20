import React  from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import '@/components/PlayBtn.scss'

function PlayBtn({ className, playPause, onClick, ...props } ) {

  return (
    <button onClick={onClick} className={clsx('playBtn', className)} {...props}>
      <Icon name={playPause ? 'Stop' : 'Play'} size={22}/>
    </button>
  )
}

export default PlayBtn