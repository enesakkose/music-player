import React from 'react'
import Icon from '@/components/Icon'
import { useSelector } from 'react-redux'
import { addPlaylist } from '@/utils/playlist'
import { useNavigate } from 'react-router-dom'
import '@/components/CreatePlaylistButton.scss'

function CreatePlaylistBtn({ size }) {
  const navigate = useNavigate()
  const { playlists } = useSelector(state => state.playlist)
  const { profile: { uid } } = useSelector(state => state.profiles)

  return (
    <button onClick={() => addPlaylist(playlists, uid, navigate)} className='createPlaylistBtn'>
      <Icon name='add' size={size}/>
    </button>
  )
}

export default CreatePlaylistBtn