import React from 'react'
import { useSelector } from 'react-redux'
import PopupLayout from '@/components/Popup/PopupLayout'

function AddSongPopup() {
  const { songPlaylist } = useSelector(state => state.playlist)

  return (
    <PopupLayout dep={songPlaylist} text='Added song to playlist'/>
  )
}

export default AddSongPopup