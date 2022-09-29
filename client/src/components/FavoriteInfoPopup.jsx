import React from 'react'
import { useSelector } from 'react-redux'
import '@/components/FavoriteInfoPopup.scss'

function FavoriteInfoPopup() {

  const { favorite } = useSelector(state => state.playlist)
    
  return (
    <div>FavoriteInfoPopup</div>
  )
}

export default FavoriteInfoPopup