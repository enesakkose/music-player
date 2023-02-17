import React from 'react'
import Button from '@/components/UI/Button'
import NavigateBtn from '@/components/IconButtons/NavigateBtn'
import { useSelector } from 'react-redux'
import { addToCustomPlaylist } from '@/utils/helpers/playlist'
import styles from '@/components/MobilePlayer/Player/Menu/PlaylistMenu/PlaylistMenu.module.scss'

function PlaylistMenu({ setOpenPlaylist, setOpenMenu }) {
  const { playlists } = useSelector(state => state.playlist)
  const { current } = useSelector(state => state.player)

  const addToPlaylistHandle = (playlistId) => {
    addToCustomPlaylist(playlistId, current)
    setOpenMenu(false)
    setOpenPlaylist(false)
  }

  return (
    <ul className={styles.playlists}>
      <NavigateBtn onClick={() => setOpenPlaylist(false)} />
      {playlists.map((playlist) => (
        <Button onClick={() => addToPlaylistHandle(playlist.id)} key={playlist.id}>
          {playlist.name}
        </Button>
      ))}
    </ul>
  )
}

export default PlaylistMenu