import React from 'react'
import Icon from '@/components/Icon'
import FavoriteBtn from '@/components/FavoriteBtn'
import clsx from 'clsx'
import { setCurrent, playPause, setCurrentSongs } from '@/store/player'
import { useSelector, useDispatch } from 'react-redux'
import '@/components/SongsTableList.scss'

function SongsTableList({children, className, index, song, findSongs}) {
  const dispatch = useDispatch()
  const { current, isPlaying } = useSelector(state => state.player)

  const listPlayBtn = () => {
    dispatch(setCurrent({song, index}))
    dispatch(setCurrentSongs(findSongs))
    
    if(current.key === song.key) return dispatch(playPause(!isPlaying))
    if(current.key !== song.key) return dispatch(playPause(true))
  }
  
  const validMusic = current.key === song.key && isPlaying

  return (
    <div 
      onDoubleClick={listPlayBtn} 
      className={clsx('songsTableListItem', validMusic ? 'playingListItem' : '', className)}
    >
      
      <div className='songsTableListItem__music'>
        <div className='songsTableListItem__indexPlay'>
          <span className='songsTableListItem__indexPlay__index'>
            {index + 1}
          </span>
          <button onClick={listPlayBtn} className='songsTableListItem__indexPlay__playBtn'>
            <Icon name={validMusic ? 'Stop' : 'Play'}/>
          </button>
        </div>
          <img className='songsTableListItem__img' src={song?.images?.coverart} alt="cover" />
          <h5 className='songsTableListItem__text'>
            {song.title}
            <span>{song.subtitle}</span>
          </h5>
      </div>
      {children}
      <FavoriteBtn 
        song={song}
        className='songsTableListItem__favBtn'
      />
    </div>
  )
}

export default SongsTableList