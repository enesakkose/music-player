import React, { useState } from 'react'
import Icon from '@/components/Icon'
import PlayBtn from '@/components/PlayBtn'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrent, playPause } from '@/store/player'

function ActionBtns({findSongs}) {
  
  const dispatch = useDispatch()
  const { current, isPlaying } = useSelector(state => state.player)
  const [ like, setLike ] = useState(false)

  const playAlbumSong = () => {
    dispatch(setCurrent(findSongs[0]))

    if(current.key === findSongs[0].key){
      dispatch(playPause(!isPlaying))
    } else{
      dispatch(playPause(true))
    }  
  }
  
  return (
    <div className="album__content__actionBtns">
      <button onClick={playAlbumSong}>
        <PlayBtn playPause={current.key === findSongs[0].key && isPlaying} className='album__content__actionBtns__play'/>
      </button>
    
      <button onClick={() => setLike(!like)}>
        <Icon name='Favorite' size={44}/>
      </button>
    </div>
  )
}

export default ActionBtns