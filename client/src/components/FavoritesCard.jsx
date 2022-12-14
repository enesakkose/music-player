import React from 'react'
import PlayBtn from '@/components/PlayBtn'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrent, playPause, setCurrentSongs } from '@/store/player'
import '@/components/FavoritesCard.scss'

function FavoritesCard({favorites}) {
  const dispatch = useDispatch()
  const { current, isPlaying } = useSelector(state => state.player)
  const haveFavoritesPlaylist = favorites.some(song => song.key === current.key)
  
  const favoritesCardPlayPause = () => {
    if (!haveFavoritesPlaylist){
      dispatch(setCurrent(favorites[0]))
      dispatch(setCurrentSongs(favorites))
    }else{
      dispatch(playPause(!isPlaying))
    }
  }

  return (
    <div className='favoritesCard'>
      <div className="favoritesCard__info">
        <h3>Liked Songs</h3>
        <span>{favorites.length} liked songs</span>  
      </div>
      <PlayBtn 
        disabled={favorites.length === 0}
        playPause={haveFavoritesPlaylist && isPlaying}
        onClick={favoritesCardPlayPause} 
        className={clsx('favoritesCard__playBtn',haveFavoritesPlaylist && isPlaying ? 'currentFav' : 'notCurrentFav' )}
      />
      <Link to='/collection/tracks' className='perde'/>
    </div>
  )
}

export default FavoritesCard