import React from 'react'
import { useSelector } from 'react-redux'
import PopupLayout from '@/components/Popup/PopupLayout'

function FavoritePopup() {
  const { favorite, favoritesPlaylist } = useSelector(state => state.playlist)

  return (
    <PopupLayout 
      dep={favoritesPlaylist} 
      text={`${favorite ? 'Added to' : 'Removed from'} your favorite songs`} 
    />
  )
}

export default FavoritePopup