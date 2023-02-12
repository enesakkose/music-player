import React from 'react'
import Icon from '@/components/UI/Icon'
import Button from '@/components/UI/Button'
import { useSelector } from 'react-redux'
import { addPlaylist } from '@/utils/helpers/playlist'
import { useNavigate } from 'react-router-dom'
import styles from '@/components/IconButtons/CreatePlaylistBtn/CreatePlaylistBtn.module.scss'

function CreatePlaylistBtn({ size }) {
  const navigate = useNavigate()
  const { playlists } = useSelector(state => state.playlist)
  const { profile: { uid } } = useSelector(state => state.profiles)

  return (
    <Button onClick={() => addPlaylist(playlists, uid, navigate)} className={styles.createPlaylistBtn}>
      <Icon name='add' size={size} />
    </Button>
  )
}

export default CreatePlaylistBtn