import React from 'react'
import Icon from '@/components/Icon'
import { setCurrent, playPause } from '@/store/player'
import { useSelector, useDispatch } from 'react-redux'
import '@/components/SongsTableList.scss'

function SongsTableList({children, index, song}) {
  const dispatch = useDispatch()
  const { current, isPlaying } = useSelector(state => state.player)
  
  const listPlayBtn = () => {
    dispatch(setCurrent({song}))

    if(current.key === song.key){
      dispatch(playPause(!isPlaying))
    } else{
      dispatch(playPause(true))
    }
  }

  return (
    <div className={`songsTableListItem 
      ${current.key === song.key && isPlaying ? 'playingListItem' : ''}`}
    >
      <div className='songsTableListItem__indexPlay'>
        <span className='songsTableListItem__indexPlay__index'>
          {index + 1}
        </span>
        <button onClick={listPlayBtn} className='songsTableListItem__indexPlay__playBtn'>
          <Icon name={current.key === song.key && isPlaying ? 'Stop' : 'Play'}/>
        </button>
      </div>

      <h4 className='songsTableListItem__text'>
        {song.title}
        <span>{song.subtitle}</span>
      </h4>
      {children}
    </div>
  )
}

export default SongsTableList