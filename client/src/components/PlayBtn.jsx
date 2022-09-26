import React  from 'react'
import Icon from '@/components/Icon'
import { useSelector } from 'react-redux'
import '@/components/PlayBtn.scss'

function PlayBtn({ className, playPause } ) {

  return (
    <button className={`playBtn ${className}`}>
        <Icon name={playPause ? 'Stop' : 'Play'} size={22}/>
    </button>
  )
}

export default PlayBtn