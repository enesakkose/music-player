import React  from 'react'
import Icon from '@/components/Icon'
import '@/components/PlayBtn.scss'

function PlayBtn({ className, playPause, onClick, ...props } ) {

  return (
    <button onClick={onClick} className={`playBtn ${className}`} {...props}>
        <Icon name={playPause ? 'Stop' : 'Play'} size={22}/>
    </button>
  )
}

export default PlayBtn