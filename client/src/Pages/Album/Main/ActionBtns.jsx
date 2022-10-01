import React, { useState } from 'react'
import Icon from '@/components/Icon'
import PlayBtn from '@/components/PlayBtn'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrent, playPause, setCurrentSongs } from '@/store/player'

function ActionBtns({findSongs}) {
  const dispatch = useDispatch()
  const { current, isPlaying } = useSelector(state => state.player)
  const [ like, setLike ] = useState(false)
  const haveSongs = findSongs.some(f => f.subtitle === current.subtitle)

  const playAlbumSong = () => {
    if(current.key !== findSongs[0].key && haveSongs) 
    return dispatch(playPause(!isPlaying))

    dispatch(setCurrent(findSongs[0]))
    dispatch(setCurrentSongs(findSongs))
    
    if(current.key === findSongs[0].key) return dispatch(playPause(!isPlaying))
    if(current.key !== findSongs[0].key) return dispatch(playPause(true))
  }

  return (
    <div className="album__content__actionBtns">
      <PlayBtn
        onClick={playAlbumSong}
        className='album__content__actionBtns__play'
        playPause={isPlaying && haveSongs}
      />
      <button onClick={() => setLike(!like)}>
        <Icon name='Favorite' size={44}/>
      </button>
    </div>
  )
}

export default ActionBtns