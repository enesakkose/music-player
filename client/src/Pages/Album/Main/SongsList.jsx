import React, { useState } from 'react'
import Icon from '@/components/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { setFavoritesPlaylist, deleteFavorites } from '@/store/playlist'
import SongsTableList from '@/components/SongsTableList'

function SongsList({song, findSongs, index}) {
  const dispatch = useDispatch()
  const { favoritesPlaylist } = useSelector(state => state.playlist)
  const [, setLike ] = useState(false)
  const s = favoritesPlaylist.find(f => f.key === song.key)

  const addFavorite = () => {
    if(s){
      setLike(false)
      dispatch(deleteFavorites(song.key))
    }else{
      setLike(true)
      dispatch(setFavoritesPlaylist(song))
    }
  }
  
  return (
    <SongsTableList song={song} index={index} findSongs={findSongs}>
      <button
        className={`songsTableListItem__favBtn favoriteBtn ${s ? 'liked' : ''}`}
        onClick={addFavorite}
      >
        <Icon
          className={`${s ? 'like' : 'unlike'}`}
          name={s ? 'FillFavorite' : 'Favorite' } 
          size={21}
        />
      </button>
    </SongsTableList>
  )
}

export default SongsList