import React from 'react'
import PlayBtn from '@/components/PlayBtn'
import '@/components/FavoritesCard.scss'

function FavoritesCard() {
  return (
    <div className='favoritesCard'>
        <div className="favoritesCard__info">
          <h3>Liked Songs</h3>
          <span>0 liked songs</span>  
        </div>
        <div className="favoritesCard__playBtn">
        <PlayBtn/>
        </div>
    </div>
  )
}

export default FavoritesCard