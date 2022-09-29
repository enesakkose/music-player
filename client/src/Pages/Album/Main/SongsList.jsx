import React from 'react'
import FavoriteBtn from '@/components/FavoriteBtn'
import { useSelector } from 'react-redux'
import { addFavoriteHandle } from '@/utils'
import SongsTableList from '@/components/SongsTableList'

function SongsList({song, findSongs, index}) {
  const { favoritesPlaylist } = useSelector(state => state.playlist)
  const s = favoritesPlaylist.find(f => f.key === song.key)

  const addFavorite = () => {
    addFavoriteHandle(s, song)
  }
  
  return (
    <SongsTableList song={song} index={index} findSongs={findSongs}>
      <FavoriteBtn 
        onClick={addFavorite}
        thereFavPlaylist={s}
        className={`songsTableListItem__favBtn ${s ? 'liked': ''}`}
      />
    </SongsTableList>
  )
}

export default SongsList