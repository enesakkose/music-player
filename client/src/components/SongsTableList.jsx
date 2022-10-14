import React from 'react'
import Icon from '@/components/Icon'
import FavoriteBtn from '@/components/FavoriteBtn'
import { setCurrent, playPause, setCurrentSongs } from '@/store/player'
import { useSelector, useDispatch } from 'react-redux'
import '@/components/SongsTableList.scss'

function SongsTableList({children, index, song, findSongs}) {
  const dispatch = useDispatch()
  const { current, isPlaying } = useSelector(state => state.player)
  const { favoritesPlaylist } = useSelector(state => state.playlist)
  const thereHavePlaylist = favoritesPlaylist.find(f => f.key === song.key)

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
      className={`songsTableListItem ${validMusic ? 'playingListItem' : ''}`}
    >
      <div className='songsTableListItem__indexPlay'>
        <span className='songsTableListItem__indexPlay__index'>
          {index + 1}
        </span>
        <button className='songsTableListItem__indexPlay__playBtn'>
          <Icon name={validMusic ? 'Stop' : 'Play'}/>
        </button>
      </div>
      <img className='songsTableListItem__img' src={song?.images?.coverart} alt="cover" />
      <h4 className='songsTableListItem__text'>
        {song.title}
        <span>{song.subtitle}</span>
      </h4>
      {children}
      <FavoriteBtn 
        song={song}
        thereFavPlaylist={thereHavePlaylist}
        className={`songsTableListItem__favBtn ${thereHavePlaylist ? 'liked' : ''}`}
      />
    </div>
  )
}

export default SongsTableList