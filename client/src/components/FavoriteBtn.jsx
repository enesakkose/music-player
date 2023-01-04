import React from 'react'
import Icon from '@/components/Icon'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { addOrRemoveFavoriteSongs } from '@/firebase/db'
import '@/components/FavoriteBtn.scss'

function FavoriteBtn({ className, song, size= 21 }) {
  const { profile: { favorites } } = useSelector(state => state.profiles)
  const favSong = favorites?.some(f => f.key === song.key)

  const addOrDeleteFavorite = () => {
    addOrRemoveFavoriteSongs(song, favSong)
  }

  return (
    <button 
      onClick={addOrDeleteFavorite} 
      className={clsx('favoriteBtn', favSong ? 'liked' : '', className)}
    >
      <Icon
        className={clsx(favSong ? 'like' : 'unlike', favSong ? 'liked': '')}
        name={favSong ? 'FillFavorite' : 'Favorite' } 
        size={size}
      />
    </button>
  )
}

export default FavoriteBtn