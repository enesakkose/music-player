import React, { useEffect, useMemo } from 'react'
import Icon from '@/components/Icon'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { setFavoritePopup, deleteFavorites } from '@/store/playlist'
import { addFavoriteHandle } from '@/utils'
import '@/components/FavoriteBtn.scss'

function FavoriteBtn({thereFavPlaylist, className, song}) {
  const dispatch = useDispatch()
  const { favoritesPlaylist } = useSelector(state => state.playlist)
  // for popup dependency 
  const addOrDeleteFavorite = () => {
    if(thereFavPlaylist === true) return dispatch(deleteFavorites(song.key))
    //this true value coming from collection/tracks route because there is no add favorite situation there
    addFavoriteHandle(thereFavPlaylist, song)
  }

  useEffect(() => {
    const t = setTimeout(() => {
      dispatch(setFavoritePopup(false))
    }, 2500);

    return () => {
      clearTimeout(t)
    }
  }, [favoritesPlaylist])

  return (
    <button onClick={addOrDeleteFavorite} className={clsx('favoriteBtn', className)}>
      <Icon
        className={`${thereFavPlaylist ? 'like' : 'unlike'} ${thereFavPlaylist ? 'liked': ''}`}
        name={thereFavPlaylist ? 'FillFavorite' : 'Favorite' } 
        size={21}
      />
    </button>
  )
}

export default FavoriteBtn