import React from 'react'
import FavoriteBtn from '@/components/FavoriteBtn'
import { useSelector } from 'react-redux'
import SongsTableList from '@/components/SongsTableList'

function SongsList({song, findSongs, index}) {
  const { favoritesPlaylist } = useSelector(state => state.playlist)
  const thereFavPlaylist = favoritesPlaylist.find(f => f.key === song.key)

  return (
    <SongsTableList song={song} index={index} findSongs={findSongs}>
      <FavoriteBtn
        song={song}
        thereFavPlaylist={thereFavPlaylist}
        className={`songsTableListItem__favBtn ${thereFavPlaylist ? 'liked': ''}`}
      />
    </SongsTableList>
  )
}

export default SongsList