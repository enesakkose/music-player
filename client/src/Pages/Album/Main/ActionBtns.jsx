import React, { useState } from 'react'
import Icon from '@/components/Icon'
import PlayBtn from '@/components/PlayBtn'


function ActionBtns() {

  const [ like, setLike ] = useState(false)

  return (
    <div className="album__content__actionBtns">
      <PlayBtn className='album__content__actionBtns__play'/>
      <button onClick={() => setLike(!like)}>
        <Icon name='Favorite' size={44}/>
      </button>
    </div>
  )
}

export default ActionBtns