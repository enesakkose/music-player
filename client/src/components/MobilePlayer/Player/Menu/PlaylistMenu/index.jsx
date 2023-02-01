import React from 'react'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import { useSelector } from 'react-redux'
import { addToPlaylist } from '@/utils/song'
import styles from '@/components/MobilePlayer/Player/Menu/PlaylistMenu/PlaylistMenu.module.scss'

function PlaylistMenu({setOpenPlaylist, setOpenMenu}) {
  const { playlists } = useSelector(state => state.playlist)
  const { current } = useSelector(state => state.player)
  
  const addToPlaylistHandle = (playlistId) => {
    addToPlaylist(playlistId, current)
    setOpenMenu(false)
    setOpenPlaylist(false)
  }

  return (
    <ul className={styles.playlists}>
      <Button onClick={() => setOpenPlaylist(false)}>
        <Icon name='left' size={26}/>
      </Button>
      {playlists.map((playlist) => (
        <li onClick={() => addToPlaylistHandle(playlist.id)} key={playlist.id}>
          {playlist.name}
        </li>
      ))}
    </ul>
  )
}

export default PlaylistMenu