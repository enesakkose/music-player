import React from 'react'
import { useSelector } from 'react-redux'
import PopupLayout from '@/components/Popup/PopupLayout'

function FavoritePopup({text}) {
  const { favorite, defaultPlaylists } = useSelector(state => state.playlist)

  return (
    <PopupLayout 
      dep={defaultPlaylists[0].favoriteSongs} 
      text={`${text} your favorite songs`} 
    />
  )
}

export default FavoritePopup