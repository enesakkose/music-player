import React, { useState, useMemo } from 'react'
import Icon from '@/components/Icon'
import Loading from '@/components/Loading'
import SongsTableList from '@/components/SongsTableList'
import { useGetSearchSongsQuery } from '@/services/music'
import { debounce } from 'lodash'
import { useDispatch } from 'react-redux'
import { setPlaylist } from '@/store/playlist'

function PlaylistMainSearchSongs({ show, setShow, playlistId }) {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [skip, setSkip] = useState(true)
  const {data, isFetching, error, isSuccess} = useGetSearchSongsQuery(search, { skip })
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
    setSkip(e.target.value.length > 1 ? false : true)
  }
  
  const debouncedHandleSearch = useMemo(
    () => debounce(handleSearch, 500)
  , [])

  const searchSong = data?.tracks?.hits?.slice(1,11)

  const addPlaylist = (song) => {
    dispatch(setPlaylist({
      id: playlistId,
      track: song 
    }))
  }

  return (
    <>
    <div className=
      {`playlist__main__content__searchSongs ${show ? 'hide' : ''} 
      ${isSuccess && !isFetching && show ? 'c' : ''}`}  
    >
      <div className={`playlist__main__content__searchSongs__head ${show ? 'hideHead' : ''}`}>
        <div className='playlist__main__content__searchSongs__head__input'>
          <h3>Let's find something for playlist</h3>
          <label>
            <input
              autoComplete='off'
              type="text"
              name='search' 
              placeholder='Search for songs'
              onChange={debouncedHandleSearch}
            />
            <Icon className='searchIcon' name='Search' size={20}/>
            {search.length > 1 && 
            <button 
              className='closeBtn' 
              onClick={() => setSearch('')}
            >
              <Icon name='Close' size={22}/>
            </button>}
          </label>
        </div>
        <button 
          className='playlist__main__content__searchSongs__head__closeBtn'
          onClick={() => setShow(!show)}
        >
          <Icon name={show ? 'Up' : 'Close'} size={35}/>
        </button>
      </div>
        <div className={`playlist__main__content__searchSongs__list ${show ? 'hideSongsList' : ''}`}>
          {isFetching && <Loading/>}
          {error && 'Something went wrong'}
          <ul className='playlist__main__content__searchSongs__list__items'>
            {isSuccess && !isFetching && searchSong.map((song,index) => (
              <li
                key={song.track.key}
                className='playlist__main__content__searchSongs__list__items__item'
              >
                <SongsTableList
                  index={index}
                  song={song.track}
                  findSongs={searchSong}
                >
                  <button 
                    onClick={() => addPlaylist(song.track)} 
                    className='addOrRemove'
                  >
                    Add
                  </button>
                </SongsTableList>
              </li>
            ))}
          </ul>
      </div>
    </div>
    </>
  )
}

export default PlaylistMainSearchSongs