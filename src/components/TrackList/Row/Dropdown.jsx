import React from 'react'
import Icon from '@/components/UI/Icon'
import DropdownMenuItem from '@/components/UI/DropdownMenu/DropdownMenuItem'
import DropdownMenu from '@/components/UI/DropdownMenu'
import ScrollWrapper from '@/components/Wrappers/ScrollWrapper'
import { addOrRemoveFavoriteSongs } from '@/firebase/db'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { addToCustomPlaylist } from '@/utils/helpers/playlist'
import styles from '@/components/TrackList/Row/Row.module.scss'

function Dropdown({ song, children }) {
  const navigate = useNavigate()
  const { playlists } = useSelector(state => state.playlist)
  const { profile: { favorites } } = useSelector(state => state.profiles)
  const favSong = favorites?.some(f => f.key === song.key)
  const playlistsLength = playlists.length > 0

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
      {!children && playlistsLength && <DropdownMenu
        openBtn={<DropdownMenuItem text='Add to playlist' className={styles.addToPlaylistBtn} />}
        onMouseOver={true}
        className={styles.playlistsDropdownMenu}
        openBtnClassName={styles.openPlaylistsDropdown}
      >
        <ScrollWrapper>
          {playlists.map((playlist) => (
            <DropdownMenuItem
              key={playlist.id}
              text={playlist.name}
              onClick={() => addToCustomPlaylist(playlist.id, song)}
            />
          ))}
        </ScrollWrapper>
      </DropdownMenu>}
      {children}
    </DropdownMenu>
  )
}

export default Dropdown