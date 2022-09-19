import React  from 'react'
import Icon from '@/components/Icon'
import { useSelector } from 'react-redux'
import '@/components/PlayBtn.scss'

function PlayBtn({className, playing} ) {
  
  

  return (
    <button className={`playBtn ${className}`}>
        <Icon name={playing ? 'Stop' : 'Play'} size={22}/>
    </button>
  )
}

export default PlayBtn