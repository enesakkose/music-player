import React from 'react'
import PlayBtn from '@/components/PlayBtn'
import clsx from 'clsx'
import Button from '@/components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrent, playPause, setCurrentSongs } from '@/store/player'
import styles from '@/components/FavoritesCard/FavoritesCard.module.scss'

function FavoritesCard({favorites}) {
  const dispatch = useDispatch()
  const { current, isPlaying } = useSelector(state => state.player)
  const inFavoritesPlaylist = favorites.some(song => song.key === current.key)
  
  const play = () => {
    if (!inFavoritesPlaylist){
      dispatch(setCurrent(favorites[0]))
      dispatch(setCurrentSongs(favorites))
    }else{
      dispatch(playPause(!isPlaying))
    }
  }

  return (
    <div className={styles.favoritesCard}>
      <div className={styles.info}>
        <h3>Liked Songs</h3>
        <span>{favorites.length} liked songs</span>  
      </div>
      <PlayBtn 
        disabled={favorites.length === 0}
        playPause={inFavoritesPlaylist && isPlaying}
        onClick={play} 
        className={clsx( styles.playBtn, inFavoritesPlaylist && isPlaying ? styles.currentFav : styles.notCurrentFav )}
      />
      <Button href='/collection/tracks' className={styles.href}/>
    </div>
  )
}

export default FavoritesCard