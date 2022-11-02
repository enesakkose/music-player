import React from 'react'
import { useSelector } from 'react-redux'
import PopupLayout from '@/components/Popup/PopupLayout'

function RemoveSongPopup() {
  const { playlists } = useSelector(state => state.playlist)

  return (
    <PopupLayout dep={playlists[0].addedSongs} text='Removed song to playlist'/>
  )
}

export default RemoveSongPopup