import React from 'react'
import Icon from '@/components/Icon'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { addOrRemoveFavoriteSongs } from '@/firebase/db'
import styles from '@/components/FavoriteBtn/FavoriteBtn.module.scss'

function FavoriteBtn({ className, song, size= 22 }) {
  const { profile: { favorites } } = useSelector(state => state.profiles)
  const favSong = favorites?.some(f => f.key === song.key)

  const addOrRemoveFavoriteHandle = () => {
    addOrRemoveFavoriteSongs(song, favSong)
  }

  return (
    <button 
      onClick={addOrRemoveFavoriteHandle} 
      className={clsx(styles.favoriteBtn, favSong ? styles.liked : '', className)}
    >
      <Icon
        className={clsx(favSong ? styles.like : styles.unlike, favSong ? styles.liked: '')}
        name={favSong ? 'FillFavorite' : 'Favorite' } 
        size={size}
      />
    </button>
  )
}

export default FavoriteBtn