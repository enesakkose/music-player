import React, {useState} from 'react'
import Icon from '@/components/Icon'
import '@/components/PlayBtn.scss'

function PlayBtn({className}) {
  const [ play, setPlay ] = useState(false)

  return (
    <button onClick={() => setPlay(!play)} className={`playBtn ${className}`}>
        <Icon name={play ? 'Stop' : 'Play'} size={22}/>
    </button>
  )
}

export default PlayBtn