import React from 'react'
import { useSelector } from 'react-redux'
import PopupLayout from '@/components/Popup/PopupLayout'

function FavoritePopup({text}) {
  const { profile: { favorites } } = useSelector(state => state.profiles)

  return (
    <PopupLayout 
      dep={favorites} 
      text={`${text} your favorite songs`} 
    />
  )
}

export default FavoritePopup