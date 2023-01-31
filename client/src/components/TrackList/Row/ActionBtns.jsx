import React from 'react'
import Icon from '@/components/Icon'
import DropdownMenuItem from '@/components/DropdownMenu/DropdownMenuItem'
import DropdownMenu from '@/components/DropdownMenu'
import { addOrRemoveFavoriteSongs } from '@/firebase/db'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { addToPlaylist } from '@/utils/song'
import styles from '@/components/TrackList/Row/Row.module.scss'

function ActionBtns({ song, customPlaylistDropdownItem }) {
  const navigate = useNavigate()
  const { playlists } = useSelector(state => state.playlist)
  const { profile: { favorites } } = useSelector(state => state.profiles)
  const favSong = favorites?.some(f => f.key === song.key)

  const addOrDeleteFavorite = () => {
    addOrRemoveFavoriteSongs(song, favSong)
  }

  return (
    <DropdownMenu
      openBtn={<Icon name='vthree' size={22} />}
      openBtnClassName={styles.openDropdown}
      className={styles.dropdownMenu}
    >
      <DropdownMenuItem
        text={`${favSong ? 'Remove' : 'Add to'} favorite songs`}
        onClick={addOrDeleteFavorite}
      />
      <DropdownMenuItem
        text='Go to Album'
        onClick={() => navigate(`/album/${song.key}`)}
      />
      {!customPlaylistDropdownItem && <DropdownMenu
        openBtn={<DropdownMenuItem text='Add to playlist' className={styles.addToPlaylistBtn} />}
        onMouseOver={true}
        className={styles.playlistsDropdownMenu}
        openBtnClassName={styles.openPlaylistsDropdown}
      >
        {playlists.map((playlist) => (
          <DropdownMenuItem
            key={playlist.id}
            text={playlist.name}
            onClick={() => addToPlaylist(playlist.id, song)}
          />
        ))}
      </DropdownMenu>}
      {customPlaylistDropdownItem}
    </DropdownMenu>
  )
}

export default ActionBtns