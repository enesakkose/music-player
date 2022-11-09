import React from 'react'
import { useSelector } from 'react-redux'
import PopupLayout from '@/components/Popup/PopupLayout'

function PublishPlaylistPopup({text}) {
  
  const { playlists } = useSelector(state => state.playlist)

  return (
    <PopupLayout dep={playlists[0].publish} text={`Playlist is ${text} displayed on your profile`}/>
  )
}

export default PublishPlaylistPopup