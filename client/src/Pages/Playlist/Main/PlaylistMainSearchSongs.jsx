import React, { useState, useMemo, useEffect, useRef } from 'react'
import Icon from '@/components/Icon'
import Loading from '@/components/Loading'
import SongsTableList from '@/components/SongsTableList'
import { useGetSearchSongsQuery } from '@/services/music'
import { useDispatch } from 'react-redux'
import { setPlaylist } from '@/store/playlist'
import { useDebounceValue } from '@/hooks/useDebounceValue'

function PlaylistMainSearchSongs({ show, setShow, playlistId }) {
  const dispatch = useDispatch()
  const [skip, setSkip] = useState(true)//this state was used to for not send request when page first render 
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounceValue(search, 600)
  const {data, isFetching, error, isSuccess} = useGetSearchSongsQuery(debouncedSearch, { skip })

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setSkip(e.target.value.length > 1 ? false : true)
  }
  
  //todo useDebouncu searchede uygula remove add buttonlarını işlevselleştir edit detailst modelini yap errora neden düşüyor onu incele actions btnslara ekle popup sorunu var çö

  const addPlaylist = (song) => {
    dispatch(setPlaylist({
      id: playlistId,
      track: song 
    }))
  }
  useEffect(() => {
    if(!show) {
      setSkip(true)
      setSearch('')
    }
  }, [show])

  const searchSong = data?.tracks?.hits?.slice(1,11)

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
              value={search}
              autoComplete='off'
              type="text"
              name='search' 
              placeholder='Search for songs'
              onChange={handleSearch}
            />
            <Icon className='searchIcon' name='Search' size={20}/>
            {search.length > 1 && 
            <button 
              className='closeBtn' 
              onClick={() => {
                setSearch('')
                setSkip(true)
              }}
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