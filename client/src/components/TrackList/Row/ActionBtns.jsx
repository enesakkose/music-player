import React from 'react'
import Icon from '@/components/Icon'
import FavoriteBtn from '@/components/FavoriteBtn'
import { addOrRemoveFavoriteSongs } from '@/firebase/db'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { DropdownMenu, DropdownMenuItem } from '@/components/DropdownMenu'
import { modal } from '@/utils'
import styles from '@/components/TrackList/Row/Row.module.scss'

function ActionBtns({song}) {
  const navigate = useNavigate()
  const { playlists } = useSelector(state => state.playlist)
  const { profile: { favorites } } = useSelector(state => state.profiles)
  const favSong = favorites?.some(f => f.key === song.key)

  const addOrDeleteFavorite = () => {
    addOrRemoveFavoriteSongs(song, favSong)
  }

  return (
    <div className={styles.actionBtns}>
      <FavoriteBtn
        song={song}
        className={styles.favBtn}
      />
      <DropdownMenu
        btn={<Icon name='vthree' size={22}/>}
        btnClassName={styles.openDropdown} 
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
        <DropdownMenu
          btn={<DropdownMenuItem text='Add to playlist'/>}
          onMouseOver={true}
          className={styles.playlistsDropdownMenu}
        >
          {playlists.map((playlist) => (
            <DropdownMenuItem
              key={playlist.id} 
              text={playlist.name} 
              onClick={() => modal('PlaylistDeleteModal', playlist)}
            />
          ))}
        </DropdownMenu>
      </DropdownMenu>
    </div>
  )
}

export default ActionBtns