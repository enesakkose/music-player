import React from 'react'
import { useSelector } from 'react-redux'
import PopupLayout from '@/components/Popup/PopupLayout'

function AddPlaylistPopup() {
  const { playlists } = useSelector(state => state.playlist)

  return (
    <PopupLayout dep={playlists} text='Added Playlist'/>
  )
}

export default AddPlaylistPopup