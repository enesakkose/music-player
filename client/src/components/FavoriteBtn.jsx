import React, { useEffect, useMemo } from 'react'
import Icon from '@/components/Icon'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { addOrRemoveFavoriteSongs } from '@/firebase/db'
import '@/components/FavoriteBtn.scss'

function FavoriteBtn({ className, song }) {
  const { defaultPlaylists } = useSelector(state => state.playlist)
  
  if(defaultPlaylists === null) return

  const addOrDeleteFavorite = () => {
    addOrRemoveFavoriteSongs(song, defaultPlaylists[0].favoriteSongs)
  }

  const favoriteSong = defaultPlaylists[0]?.favoriteSongs?.find(s => s.key === song.key)

  return (
    <button 
      onClick={addOrDeleteFavorite} 
      className={clsx('favoriteBtn', className, favoriteSong ? 'liked' : '')}
    >
      <Icon
        className={clsx(favoriteSong ? 'like' : 'unlike', favoriteSong ? 'liked': '')}
        name={favoriteSong ? 'FillFavorite' : 'Favorite' } 
        size={21}
      />
    </button>
  )
}

export default FavoriteBtn