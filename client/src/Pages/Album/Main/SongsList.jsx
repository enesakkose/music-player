import React, { useState } from 'react'
import Icon from '@/components/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { setFavorites, deleteFavorites } from '@/store/favorite'
import SongsTableList from '@/components/SongsTableList'

function SongsList({song, index}) {
  const dispatch = useDispatch()
  const [ like, setLike ] = useState(song.isFavorite)
  const { favorites } = useSelector(state => state.favorite)
  const addFavorite = () => {
    setLike(!like)
    if(!like) return dispatch(setFavorites(song))
    if(like) return dispatch(deleteFavorites(song))
  }
  
  console.log(favorites)
  return (
    <SongsTableList song={song} index={index}>
      <button
        className={`songsTableListItem__favBtn favoriteBtn ${like ? 'liked' : ''}`}
        onClick={addFavorite}
      >
        <Icon
          className={`${like ? 'like' : 'unlike'}`}
          name={like ? 'FillFavorite' : 'Favorite' } 
          size={21}
        />
      </button>
    </SongsTableList>
  )
}

export default SongsList