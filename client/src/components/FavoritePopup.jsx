import React from 'react'
import { useSelector } from 'react-redux'
import '@/components/FavoritePopup.scss'

function FavoritePopup() {

  const { favorite } = useSelector(state => state.playlist)

  return (
    <div className='favoritePopup'>
      <h4 className='favoritePopup__text'>
        {favorite ? 'Added to' : 'Remove from'} your favorite songs
      </h4>
    </div>
  )
}

export default FavoritePopup