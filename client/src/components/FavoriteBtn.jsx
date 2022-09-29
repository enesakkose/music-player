import React from 'react'
import Icon from '@/components/Icon'
import '@/components/FavoriteBtn.scss'

function FavoriteBtn({thereFavPlaylist, className, onClick}) {
  return (
    <button onClick={onClick} className={`${className} favoriteBtn`}>
      <Icon
        className={`${thereFavPlaylist ? 'like' : 'unlike'}`}
        name={thereFavPlaylist ? 'FillFavorite' : 'Favorite' } 
        size={21}
      />
    </button>
  )
}

export default FavoriteBtn