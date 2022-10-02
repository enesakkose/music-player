import React from 'react'
import PlayBtn from '@/components/PlayBtn'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrent, playPause, setCurrentSongs } from '@/store/player'
import '@/components/FavoritesCard.scss'

function FavoritesCard() {
  const dispatch = useDispatch()
  const { favoritesPlaylist } = useSelector(state => state.playlist)
  const { current, isPlaying } = useSelector(state => state.player)
  const haveFavoritesPlaylist = favoritesPlaylist.some(song => song.key === current.key)
  
  const favoritesCardPlayPause = () => {
    if (!haveFavoritesPlaylist){
      dispatch(setCurrent(favoritesPlaylist[0]))
      dispatch(setCurrentSongs(favoritesPlaylist))
    }else{
      dispatch(playPause(!isPlaying))
    }
  }

  return (
    <div className='favoritesCard'>
        <div className="favoritesCard__info">
          <h3>Liked Songs</h3>
          <span>{favoritesPlaylist.length} liked songs</span>  
        </div>
        <PlayBtn 
          disabled={favoritesPlaylist.length === 0}
          playPause={haveFavoritesPlaylist && isPlaying}
          onClick={favoritesCardPlayPause} 
          className={`favoritesCard__playBtn 
          ${haveFavoritesPlaylist && isPlaying ? 'currentFav' : 'notCurrentFav'}
          `}
        />
        <Link to='/collection/tracks' className='perde'/>
    </div>
  )
}

export default FavoritesCard